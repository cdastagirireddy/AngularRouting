import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import {ProductsComponent} from "./components/products/products.component";
import {SamsungComponent} from "./components/samsung/samsung.component";
import {AppleComponent} from "./components/apple/apple.component";
import {GoogleComponent} from "./components/google/google.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";


const routes: Routes = [
  { path : 'home' , component : HomeComponent},
  { path : 'about' , component : AboutComponent},
  { path : 'contact' , component : ContactComponent},
  { path : 'products' , component : ProductsComponent ,
    children : [
      { path : 'samsung', component : SamsungComponent},
      { path : 'apple' , component : AppleComponent},
      { path : 'google' , component : GoogleComponent}
    ]},
  { path : '**' , component : PageNotFoundComponent},
  { path : 'samsung', component : SamsungComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
