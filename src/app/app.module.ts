import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; 

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { ContentPartComponent } from './content-part/content-part.component';
import { SortingComponent } from './sorting/sorting.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { FilterPipe } from './filter.pipe';
import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SearchComponent,
    CartComponent,
    ContentPartComponent,
    SortingComponent,
    ProductListingComponent,
    FilterPipe,
    AboutComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
       {path: 'content-part', component: ContentPartComponent},
       {path: 'aboutus', component: AboutComponent},
       {path: 'product-detail', component: ProductDetailComponent}
      ]),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
