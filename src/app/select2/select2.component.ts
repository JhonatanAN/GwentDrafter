import { Component, OnInit } from '@angular/core';
import { GwentapiService } from '../gwentapi.service';


@Component({
  selector: 'app-select2',
  templateUrl: './select2.component.html',
  styleUrls: ['./select2.component.css']
})

export class Select2Component implements OnInit {
	
  v = "Select a Card";
  cards;
  teste = "";
selectedCard: any;

  constructor(private gwentApi:GwentapiService) {}

  ngOnInit() {
    
   this.gwentApi.getCards().subscribe(
    cards => this.cards = cards
    );
    //console.log(this.cards);
  }


  onSelect(name: string){
    this.teste = this.gwentApi.getLink(name);
    //console.log(this.teste);
    }

 }
