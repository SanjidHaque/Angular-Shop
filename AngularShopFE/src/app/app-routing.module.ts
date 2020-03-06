import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductsResolverService} from './route-resolvers/products-resolver.service';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent,
    resolve: { products: ProductsResolverService }
  },
  {
    path : '',
    redirectTo: '/product-list',
    pathMatch : 'full'
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
  { path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
