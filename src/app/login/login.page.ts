import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, NavController,AlertController  } from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loadCtrl: LoadingController,private navCtrl: NavController) { }

  ngOnInit() {
  }

  async registerPage(){

  	let loader = await this.loadCtrl.create({
      message: "Veuillez patienter...",
      duration: 10000
    });
    loader.present();
    this.navCtrl.navigateForward("/register");
    //dismiss loader
    loader.dismiss();
  }

}
