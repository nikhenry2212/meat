
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


}
