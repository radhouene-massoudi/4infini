import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstCComponent } from './first-c/first-c.component';
import { TestComponent } from './test/test.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import {FormsModule} from "@angular/forms";
import { ExerciceComponent } from './exercice/exercice.component';
import { OffreEmploiComponent } from './offre-emploi/offre-emploi.component';
import { TvComponent } from './tv/tv.component';
import { PcComponent } from './pc/pc.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ShowoneproductComponent } from './showoneproduct/showoneproduct.component';
import { FormComponent } from './form/form.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DeetailComponent } from './deetail/deetail.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstCComponent,
    TestComponent,
    NgstyleComponent,
    ExerciceComponent,
    OffreEmploiComponent,
    TvComponent,
    PcComponent,
    ParentComponent,
    ChildComponent,
    ShowoneproductComponent,
    FormComponent,
    NotfoundComponent,
    DeetailComponent,
    UpdateProductComponent,
    DeleteproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
