import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

@Injectable({
    providedIn: 'root'
})
export class Api{
    url: string = "https://controlled.app.br/api/";

    constructor(public http: HttpClient, public storage: Storage) {
      }

      pesquisarLocacao(placa_car: any) {
        return this.http.get<any>(this.url + 'checklist/pesquisar_locacao?placa_car=' + placa_car, httpOptions);
      }

}
