import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home';
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'fish.html'
})
export class FishPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page


  // tab1Root: any = HomePage;
  // tab2Root: any = AboutPage;
  // tab3Root: any = ContactPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  	// console.log("yolo" + param);
  }
  param = this.navParams.get('drag');
}
