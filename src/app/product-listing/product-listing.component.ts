import { Component, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { ListingService } from '../services/product/listing.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
  providers: [ListingService]
})
export class ProductListingComponent implements OnInit {
	
  constructor( private listingService: ListingService ) { }

  public proListing = [];
  /*public proListing = [
  	{
  		proImg: 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBLENOVO-VIBE-A-TO2519725AF095B8/0x1920/70/0.jpeg',
  		name: 'XLenovo Vibe K5',
  		price: '12000',
  		screenSize: 5.5
  	},
  	{
  		proImg: 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBLENOVO-VIBE-A-TO2519725AF095B8/0x1920/70/0.jpeg',
  		name: 'ZAbnovo Vibe K6',
  		price: '10000',
  		screenSize: 6.0,
  		discount: {
  			'd1': 10,
  			'd2': 20
  		}
  	},
  	{
  		proImg: 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBLENOVO-VIBE-A-TO2519725AF095B8/0x1920/70/0.jpeg',
  		name: 'Lenovo Vibe K7',
  		price: '16000',
  		screenSize: 4.5
  	},
  	{
  		proImg: 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBLENOVO-VIBE-A-TO2519725AF095B8/0x1920/70/0.jpeg',
  		name: 'BBRU LenoK8 - 123',
  		price: '13000',
  		screenSize: 5.75
  	},
  	{
  		proImg: 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBLENOVO-VIBE-A-TO2519725AF095B8/0x1920/70/0.jpeg',
  		name: 'UZE Lenovo Vibe K9',
  		price: '18000',
  		screenSize: 4.5,
  		discount: {
  			'd1': 10,
  			'd2': 20
  		}
  	},
  	{
  		proImg: 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBLENOVO-VIBE-A-TO2519725AF095B8/0x1920/70/0.jpeg',
  		name: 'PLenovo Vibe K10',
  		price: '20000',
  		screenSize: 5.75
  	},
  	{
  		proImg: 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBLENOVO-VIBE-A-TO2519725AF095B8/0x1920/70/0.jpeg',
  		name: 'DcLenovo Vibe K11',
  		price: '23000',
  		screenSize: 5.75,
  		discount: {
  			'd1': 10,
  			'd2': 20
  		}
  	},
  	{
  		proImg: 'BBhttps://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBLENOVO-VIBE-A-TO2519725AF095B8/0x1920/70/0.jpeg',
  		name: 'Lenovo Vibe K12',
  		price: '24000',
  		screenSize: 5.75
  	},
  	{
  		proImg: 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBLENOVO-VIBE-A-TO2519725AF095B8/0x1920/70/0.jpeg',
  		name: 'KABLenoVibe K13',
  		price: '28000',
  		screenSize: 5.75
  	},
  	{
  		proImg: 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBLENOVO-VIBE-A-TO2519725AF095B8/0x1920/70/0.jpeg',
  		name: 'OpLeno Vibe K13',
  		price: '32000',
  		screenSize: 5.75
  	},
  	{
  		proImg: 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBLENOVO-VIBE-A-TO2519725AF095B8/0x1920/70/0.jpeg',
  		name: 'EKLenovo Vibe K13',
  		price: '56000',
  		screenSize: 5.75
  	}
  ];*/
   
  onChange(proSorting) {
    var proName = _.sortBy(this.proListing, 'name');
    var proPrice = _.sortBy(this.proListing, 'price');
    if(proSorting == "name"){
      this.proListing = proName;
    }else{
      this.proListing = proPrice; 
    }
  }

  ngOnInit() {
    
    var proName = _.sortBy(this.proListing, 'name');
    var proPrice = _.sortBy(this.proListing, 'price');

    this.listingService.fetchData();
  }

 
}
