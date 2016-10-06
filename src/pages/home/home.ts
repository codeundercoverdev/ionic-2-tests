import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import {FishPage} from '../fish';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FishPage]
})
export class HomePage {

  
  constructor(public navCtrl: NavController, public goFish: FishPage, public navParams: NavParams) {
  	 // this.goFish = goFish;
  }

  playPoker(event, card){
  	this.navCtrl.push(FishPage, {
  		drag: card
  	});
  }

}
