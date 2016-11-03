import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';


@Component({
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  canLeave: boolean;

  constructor(public navCtrl: NavController) {
  }

  doCanLeave(){
    this.canLeave = true;
    this.navCtrl.push(ListPage)
     .catch(()=> console.log('I can leave?'))
  }

  canNotLeave(){
    this.canLeave = false;
    this.navCtrl.push(ListPage)
     .catch(()=> console.log('I can not leave?'))
  }

  ionViewCanLeave(): boolean{
    return this.canLeave;
   }

}
