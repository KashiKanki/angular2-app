import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class ListingService {

  constructor(private http: Http) { }

  fetchData(){
    return this.http.get('../assets/services/products.json').map(
        (res) => res.json()
      );
  }

}
