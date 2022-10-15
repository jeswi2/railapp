import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewtrainsComponent } from './viewtrains/viewtrains.component';
import { HttpClientModule } from '@angular/common/http';
import { AdddataComponent } from './adddata/adddata.component';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {
    path:"",component:ViewtrainsComponent
  },
  {
path:"add",component:AdddataComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewtrainsComponent,
    AdddataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
