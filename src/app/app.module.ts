import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';

import { TwitterDirective } from './twitter.directive';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,

    TwitterDirective,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
