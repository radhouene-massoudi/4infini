import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeetailComponent } from './deetail/deetail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PcComponent } from './pc/pc.component';
import { TvComponent } from './tv/tv.component';
import { TestComponent } from './test/test.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

 /* {
    path:'', redirectTo:'pc', pathMatch:'full'
  },*/
{
  path:'test', component:TestComponent
},
{
  path:'tv', component:TvComponent
},
{
  path:'pc', component:PcComponent
},
{
  path:'update/:id', component:UpdateProductComponent
},
{
  path:'detail/:name', component:DeetailComponent
},
{
  path:'delete/:id', component:DeleteproductComponent
},
{
  path:'**', component:NotfoundComponent
},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
