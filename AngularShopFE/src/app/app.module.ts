import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {ProductDataStorageService} from './services/product-data-storage.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ProductsResolverService} from './route-resolvers/products-resolver.service';
import {MatButtonModule} from '@angular/material';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ProductDataStorageService, ProductsResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
