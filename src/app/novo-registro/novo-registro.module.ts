import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoRegistroPageRoutingModule } from './novo-registro-routing.module';

import { NovoRegistroPage } from './novo-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoRegistroPageRoutingModule
  ],
  declarations: [NovoRegistroPage]
})
export class NovoRegistroPageModule {}
