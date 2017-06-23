import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ListingService {

  constructor(private http: Http) { }

  fetchData(){
    return this.http.get('../assets/services/products.json').subscribe(
       (data) => console.log(data) 
    );

  }

}
