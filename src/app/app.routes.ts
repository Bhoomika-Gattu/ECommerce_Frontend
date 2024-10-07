import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { CartComponent } from './cart/cart.component';

export const routes: Routes = 
[ 
    {path: 'products/:id', component: ProductDetailsComponent},
    // {path: 'products/:name',component: ProductListComponent},
    {path: 'category/:id', component: ProductListComponent},
   
    { path: 'cart', component: CartComponent },
    {path: 'category', component: ProductListComponent},
    {path: 'products', component: ProductListComponent},
    {path: '', redirectTo: '/products', pathMatch: 'full'},
    {path: '**', redirectTo: '/products', pathMatch: 'full'},
];
