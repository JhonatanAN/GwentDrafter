import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'; 
import { CARDS } from './cards-mock';

@Injectable({
  providedIn: 'root'
})
export class GwentapiService {

  constructor() {}

  getCards(){
    let cardsArray= [];
    for (let cardId in CARDS) {
	    let card = CARDS[cardId];
  	  let name = card.name["en-US"];
  	  let url;
      for (let artId in card.variations) {
      	url = card.variations[artId].art.thumbnail;
      }
      cardsArray.push({"id": cardId, "name": name, "thumbnail": url});
    }
    return of(Object.values(cardsArray));
  }

  getOneCard(cardId){
    return of (CARDS[cardId]);
  }
  }
