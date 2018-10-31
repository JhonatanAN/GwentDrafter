import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectComponent } from './select/select.component';
import { DeckComponent } from './deck/deck.component';
import { GwentapiService } from './gwentapi.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  AppComponent,
  SelectComponent,
  DeckComponent,
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
<<<<<<< HEAD
  FormsModule
=======
  FormsModule,
  HttpClientModule
>>>>>>> origin/master
  ],
  providers: [],
  bootstrap: [
  AppComponent,
  SelectComponent,
  DeckComponent
  ]
})
export class AppModule { }
