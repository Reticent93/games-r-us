package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

//Product contains info about our games
type Product struct {
	ID          int
	Name        string
	Slug        string
	Description string
}

//creating a catalog of our games and storing them in a slice. Need to create DB soon
var products = []Product{
	{ID: 1, Name: "Metroid", Slug: "metroid", Description: "Samus takes on the world"},
	{ID: 2, Name: "Contra", Slug: "contra", Description: "Two dudes take on bugs"},
	{ID: 3, Name: "Super Mario Bros", Slug: "super-mario-bros", Description: "A brother helping his brother get his girl back"},
	{ID: 4, Name: "Double Dragon", Slug: "double-dragon", Description: "Two dudes taking on bad guys"},
	{ID: 5, Name: "Kid Icarus", Slug: "kid-icarus", Description: "A boy trying to get back to his father"},
	{ID: 6, Name: "Duck Hunt", Slug: "duck-hunt", Description: "A man and his dog hunting"},
}

func main() {
	r := mux.NewRouter()

	//will be invoked when user calls /status
	var StatusHandler = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("API is running"))
	})

	//will be invoked when user makes GET request to /products endpoint
	var ProductsHandler = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		//converting slice of products to JSON
		payload, _ := json.Marshal(products)
		w.Header().Set("Content-type", "application/json")
		w.Write([]byte(payload))
	})

	//feedback handler will add positive or negative feedback to the product
	var AddFeedbackHandler = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		var product Product
		vars := mux.Vars(r)
		slug := vars["slug"]

		for _, p := range products { //range iterates over product
			if p.Slug == slug {
				product = p
			}
		}
		w.Header().Set("Content-type", "application/json")
		if product.Slug != "" {
			payload, _ := json.Marshal(product)
			w.Write([]byte(payload))
		} else {
			http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
		}
	})

	// /status -  will call to make sure that our API is up and running
	// /products - will retrieve a list of products that the user can leave feedback on
	// /products/{slug}/feedback -  will capture user feedback on products
	r.Handle("/status", StatusHandler).Methods("GET")
	r.Handle("/products", ProductsHandler).Methods("GET")
	r.Handle("/products/{slug}/feedback", AddFeedbackHandler).Methods("POST")

	//need to add this to view my html files in the views folder
	r.Handle("/", http.FileServer(http.Dir("./views/")))

	//Use this to serve our static files
	r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./static/"))))

	fmt.Printf("Server starting on :9090\n")
	if err := http.ListenAndServe(":9090", r); err != nil {
		log.Fatal(err)
	}

}
