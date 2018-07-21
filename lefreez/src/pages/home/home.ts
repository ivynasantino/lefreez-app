
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, plataforma: Platform) {
    this.isAndroid = plataforma.is('android');
  }
  
}