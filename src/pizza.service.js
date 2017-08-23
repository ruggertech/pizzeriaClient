class PizzaService {
  getPizzaList() {
    // TODO: replace this with an actual remote call
    return {
      "pizzas": [
        {
          "id":          1,
          "topping":     "Margherita",
          "ingredients": [
            "cheese", "tomato sauce"
          ],
          "price":       5
        },
        {
          "id":          2,
          "name":        "Onion",
          "ingredients": [
            "cheese", "tomato sauce"
          ],
          "price":       5
        }

      ]
    };
  }

}

export default new PizzaService();