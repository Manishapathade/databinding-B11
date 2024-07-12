import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './shared/component/product/product.component';
import { productsComponent } from './shared/component/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    productsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
