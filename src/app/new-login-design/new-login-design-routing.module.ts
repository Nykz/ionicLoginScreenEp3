import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewLoginDesignPage } from './new-login-design.page';

const routes: Routes = [
  {
    path: '',
    component: NewLoginDesignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewLoginDesignPageRoutingModule {}
