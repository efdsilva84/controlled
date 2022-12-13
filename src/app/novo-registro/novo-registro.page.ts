import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-registro',
  templateUrl: './novo-registro.page.html',
  styleUrls: ['./novo-registro.page.scss'],
})
export class NovoRegistroPage implements OnInit {
  nome: string = "";
  cnh: number = 0;
  empresa: string = "";
  entrada: string ="";
  saida: string = "";
  veiculo: string ="";
  placa: string= "";
  carreta: string ="";
  autorizante: string="";



  constructor(private router: Router) { }

  ngOnInit() {
  }

  voltar(){
    this.router.navigate(['usuarios']);
  }

}
