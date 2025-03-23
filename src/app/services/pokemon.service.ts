import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/entities/pokemon.entity';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL = "";

  constructor(private httpclient: HttpClient) {
    this.baseURL = environment.pokeApi
  }

  getPokemon(name: string): Observable<Pokemon>{
    return this.httpclient.get<Pokemon>(`${this.baseURL + name}`);
  }
}
