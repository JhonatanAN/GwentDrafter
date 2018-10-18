import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GwentAPI } from '../../node_modules/gwent-api-client';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GwentapiService {

  constructor() {}

  getCards(){
     return GwentAPI
    // fetch the first 20 cards
    .cards({offset: 0, limit: 20})
    // fetch each cards in the list
    .then(res => Promise.all(res.results.map(GwentAPI.one/*(card, { fields: ['variations'] })*/)));
  }

}
