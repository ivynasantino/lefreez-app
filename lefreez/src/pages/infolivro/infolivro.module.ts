import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfolivroPage } from './infolivro';

@NgModule({
  declarations: [
    InfolivroPage,
  ],
  imports: [
    IonicPageModule.forChild(InfolivroPage),
  ],
  entryComponents: [
    InfolivroPage
  ]
})
export class InfolivroPageModule {}
