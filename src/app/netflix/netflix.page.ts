import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-netflix',
  templateUrl: './netflix.page.html',
  styleUrls: ['./netflix.page.scss'],
})
export class NetflixPage implements OnInit {

  constructor( public modalController: ModalController) { }

  ngOnInit() {
  }

   

}
