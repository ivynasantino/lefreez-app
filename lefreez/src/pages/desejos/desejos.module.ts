import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DesejosPage } from './desejos';

@NgModule({
  declarations: [
    DesejosPage,
  ],
  imports: [
    IonicPageModule.forChild(DesejosPage),
  ],
})
export class DesejosPageModule {}
