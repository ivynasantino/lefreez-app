import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LivrariaPage } from './livraria';
import { InfolivroPage } from '../infolivro/infolivro'

@NgModule({
  declarations: [
    LivrariaPage,
  ],
  imports: [
    IonicPageModule.forChild(LivrariaPage),
  ]
})
export class LivrariaPageModule {}
