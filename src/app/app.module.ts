import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewtrainsComponent } from './viewtrains/viewtrains.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  {
    path:"",component:ViewtrainsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewtrainsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
