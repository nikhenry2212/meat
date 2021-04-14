import { Restaurant } from "./restaurant/restaurant.model";
// import pra usar modelo de tipagem da classe restaurant

export class RestaurantsService {

  rest: Restaurant[] = [

    //trouxe a simulação do back-end para o service

    //simulando dados do back-end
        {
          id: "bread-bakery",
          name: "Bread & Bakery",
          category: "Bakery",
          deliveryEstimate: "25m",
          rating: 4.9,
          imagePath: "assets/img/restaurants/breadbakery.png",

        },
        {
          id: "burger-house",
          name: "Burger House",
          category: "Hamburgers",
          deliveryEstimate: "100m",
          rating: 3.5,
          imagePath: "assets/img/restaurants/burgerhouse.png",

        }
    ]

  constructor(){}

  restaurants(): Restaurant[] {
    return this.rest;
  }


}
