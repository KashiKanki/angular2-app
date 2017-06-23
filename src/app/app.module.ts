import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { ContentPartComponent } from './content-part/content-part.component';
import { SortingComponent } from './sorting/sorting.component';
import { ProductListingComponent } from './product-listing/product-listing.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SearchComponent,
    CartComponent,
    ContentPartComponent,
    SortingComponent,
    ProductListingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
