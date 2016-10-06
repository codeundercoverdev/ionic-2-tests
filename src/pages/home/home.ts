import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {FishPage} from '../fish';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FishPage]
})
export class HomePage {

  
  constructor(public navCtrl: NavController, private goFish: FishPage) {
  	this.goFish = FishPage;
  }

  playPoker(){
  	this.navCtrl.push(FishPage);
  }

}
