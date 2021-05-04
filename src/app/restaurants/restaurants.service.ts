
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import { Restaurant } from "./restaurant/restaurant.model";

import 'rxjs/add/operator/map';
// import pra usar modelo de tipagem da classe restaurant
import 'rxjs/add/operator/catch';
//import de tratamento de erro

import {MEAT_API} from './../app.api';
import { ErrorHandler} from '../app.error-handler'
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item-model';
//import do modelo menu-item
//import da class q o erro foi tratado

@Injectable()
export class RestaurantsService {


  constructor(private http: Http){}

  restaurants(): Observable<Restaurant[]> {
    // return this.http.get(`${MEAT_API}/restaurants1`) teste de erro
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)

  }

  // Nova rota para avaliações
  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)


  }
  menuOfRestaurants(id: string): Observable<MenuItem[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
    // criando nova rota de menu do restaurants items a serem consumidos
  }
}
