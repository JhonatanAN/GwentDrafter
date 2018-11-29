import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GwentapiService } from '../gwentapi.service';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent implements OnInit {
	
  v = "Select a Card";
  cards;
  teste = "";
  selectedCard: any = "";

  constructor(private gwentApi:GwentapiService) {}

  ngOnInit() {
    
   this.gwentApi.getCards().subscribe(
    cards => this.cards = cards);

  }


  onSelect(name: string){
    this.teste = this.gwentApi.getLink(name);

    }

 }
