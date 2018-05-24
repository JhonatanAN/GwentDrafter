import { Component, OnInit } from '@angular/core';
import { GwentapiService } from './gwent-api-client';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent implements OnInit {
	
	v = "place holder";

	

  constructor() {private GwentAPI:GwentAPI}

  ngOnInit() {
    this.getCards();
  }

}
