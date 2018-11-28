import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectComponent } from './select/select.component';
import { DeckComponent } from './deck/deck.component';
import { GwentapiService } from './gwentapi.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { Select2Component } from './select2/select2.component';
import { Select3Component } from './select3/select3.component';
import { Select4Component } from './select4/select4.component';

@NgModule({
  declarations: [
  AppComponent,
  SelectComponent,
  DeckComponent,
  FilterPipe,
  Select2Component,
  Select3Component,
  Select4Component,
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
  AppComponent,
  SelectComponent,
  DeckComponent
  ]
})
export class AppModule { }
