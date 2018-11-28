import { Component, OnInit } from '@angular/core';
import { GwentapiService } from '../gwentapi.service';


@Component({
  selector: 'app-select3',
  templateUrl: './select3.component.html',
  styleUrls: ['./select3.component.css']
})

export class Select3Component implements OnInit {
	
  v = "Select a Card";
  cards;
  teste = "";

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
