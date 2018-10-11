import { Component, OnInit } from '@angular/core';
import { GwentapiService } from '../gwentapi.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent implements OnInit {
	
  v = "Select a Card";
  cards = [];
	
  constructor(private gwentAPI:GwentapiService) {}

  ngOnInit() {
    this.gwentAPI.getCards().subscribe(
      cards => {
        console.log(cards);
        this.cards = cards;
    });
  }
 
}
