import { Component, OnInit } from '@angular/core';
import { GwentapiService } from '../gwentapi.service';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent implements OnInit {
	
  v = "Select a Card";
  cards;

  constructor(private gwentApi:GwentapiService) {}

  ngOnInit() {
    
   this.gwentApi.getCards().subscribe(
    cards => this.cards = cards
    );
    //console.log(cards);
  }

	search(q: string) {
		this.cards = this.gwentApi.getCardsName(q);
	}


 }
