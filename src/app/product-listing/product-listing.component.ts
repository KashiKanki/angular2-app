import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
	
  constructor() { }

  public proListing = [
  	{
  		proImg: 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBLENOVO-VIBE-A-TO2519725AF095B8/0x1920/70/0.jpeg',
  		name: 'Lenovo Vibe K5',
  		price: '12000',
  		screenSize: 5.5
  	},
  	{
  		proImg: 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBLENOVO-VIBE-A-TO2519725AF095B8/0x1920/70/0.jpeg',
  		name: 'Abnovo Vibe K6',
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
  		name: 'RU Lenovo Vibe K8 - 123',
  		price: '13000',
  		screenSize: 5.75
  	},
  	{
  		proImg: 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBLENOVO-VIBE-A-TO2519725AF095B8/0x1920/70/0.jpeg',
  		name: 'ZE Lenovo Vibe K9',
  		price: '18000',
  		screenSize: 4.5,
  		discount: {
  			'd1': 10,
  			'd2': 20
  		}
  	},
  	{
  		proImg: 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBLENOVO-VIBE-A-TO2519725AF095B8/0x1920/70/0.jpeg',
  		name: 'Lenovo Vibe K10',
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
  		name: 'ABLenovo Vibe K13',
  		price: '28000',
  		screenSize: 5.75
  	},
  	{
  		proImg: 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBLENOVO-VIBE-A-TO2519725AF095B8/0x1920/70/0.jpeg',
  		name: 'OpLenovo Vibe K13',
  		price: '32000',
  		screenSize: 5.75
  	},
  	{
  		proImg: 'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBLENOVO-VIBE-A-TO2519725AF095B8/0x1920/70/0.jpeg',
  		name: 'KLenovo Vibe K13',
  		price: '56000',
  		screenSize: 5.75
  	}
  ];


  ngOnInit() {

  }

}
