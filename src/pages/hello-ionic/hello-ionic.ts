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

  canNotEnter(){
    this.canLeave = true
    this.navCtrl.setRoot(ListPage)
    .catch(()=> console.log('I can canNot enter?'))
  }

  ionViewCanLeave(): boolean{
    return this.canLeave;
   }

   ionViewCanEnter(): boolean {
     console.log('Can I enter LISTING?')
     this.navCtrl.push(ListPage)
     .catch(()=> console.log('XXXX?'))
     return false;
   }


}
