import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewtrainsComponent } from './viewtrains/viewtrains.component';

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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
