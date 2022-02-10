import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertaPageRoutingModule } from './alerta-routing.module';

import { AlertaPage } from './alerta.page';
import { ComponenteModule } from 'src/app/componente/componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertaPageRoutingModule,
    ComponenteModule
  ],
  declarations: [AlertaPage]
})
export class AlertaPageModule {}
