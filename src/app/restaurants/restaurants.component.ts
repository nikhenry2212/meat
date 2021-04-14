import { Component, OnInit } from '@angular/core';
// import do modelo que o restaurant vai seguir =  criando uma tipagem
import {Restaurant} from './restaurant/restaurant.model'
import { RestaurantsService } from './restaurants.service';
// tirei o modelo de tipagem de classe de Restaurant e coloquei para o modelo de service

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

   restaurants: Restaurant[]
  //[

  // //simulando dados do back-end
  //     {
  //       id: "bread-bakery",
  //       name: "Bread & Bakery",
  //       category: "Bakery",
  //       deliveryEstimate: "25m",
  //       rating: 4.9,
  //       imagePath: "assets/img/restaurants/breadbakery.png",

  //     },
  //     {
  //       id: "burger-house",
  //       name: "Burger House",
  //       category: "Hamburgers",
  //       deliveryEstimate: "100m",
  //       rating: 3.5,
  //       imagePath: "assets/img/restaurants/burgerhouse.png",

  //     }
  // ]

  constructor(private restaurantService: RestaurantsService) { }
  // chamei ele dentro do constructor como propriedade

  ngOnInit() {
    this.restaurants = this.restaurantService.restaurants()
  }

}
