import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewLoginDesignPageRoutingModule } from './new-login-design-routing.module';

import { NewLoginDesignPage } from './new-login-design.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewLoginDesignPageRoutingModule
  ],
  declarations: [NewLoginDesignPage]
})
export class NewLoginDesignPageModule {}
