 import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(proListing: any, term?: any): any {
    // check if search term is undefined
    if(term === undefined) return proListing;

    // retern updated ProductList array
    return proListing.filter(function(proList){
    	return proList.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
 