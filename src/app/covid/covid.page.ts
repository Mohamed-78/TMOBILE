import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, NavController, AlertController, ActionSheetController, ModalController } from "@ionic/angular";
 
@Component({
  selector: 'app-covid',
  templateUrl: './covid.page.html',
  styleUrls: ['./covid.page.scss'],
})
export class CovidPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private loadCtrl: LoadingController,
              private navCtrl: NavController) {  
  	this.Loading();
  }

  ngOnInit() {
  }

  async Loading() {
    const loading = await this.loadCtrl.create({
      message: 'Patientez svp !',
      duration: 3000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    
  }

}
