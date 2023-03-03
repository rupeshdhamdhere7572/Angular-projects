import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'home',component: HomeComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'product', component: ProductComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'product/:id', component: ProductDetailsComponent
  },
  {
    path: '', redirectTo: 'home',pathMatch: 'full'
  },
  {
    path: '**',component:PagenotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
