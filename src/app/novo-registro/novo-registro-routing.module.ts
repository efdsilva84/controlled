import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoRegistroPage } from './novo-registro.page';

const routes: Routes = [
  {
    path: '',
    component: NovoRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovoRegistroPageRoutingModule {}
