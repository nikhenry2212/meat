import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import { Restaurant } from "./restaurant/restaurant.model";

import 'rxjs/add/operator/map';
// import pra usar modelo de tipagem da classe restaurant

import {MEAT_API} from './../app.api';

@Injectable()
export class RestaurantsService {

  //rest: Restaurant[] = [

    // //trouxe a simulação do back-end para o service

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

  constructor(private http: Http){}

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json());
  }


}
