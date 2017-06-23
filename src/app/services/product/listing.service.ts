import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class ListingService {

  constructor(private http: Http) { }

  getUser(){
  	const searchText = 'js';
  	const url = 'http://alcoholix.vizualize.com/syntel/trunk/html/products.json'; 
  	return this.http.get(url).map(
  		res => {
  			const data = res.json();
  			console.log(data); 
  			return data; 
  		}
  	)
  }

}
