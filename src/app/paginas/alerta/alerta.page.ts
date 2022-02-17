import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(public alertaCrl: AlertController) { }
  

    ngOnInit() {
    }
    async onClick(){
        const alert = await this.alertaCrl.create({
          cssClass: 'my-custom-class',
          header: 'Alert',
          subHeader: 'Subtitle',
          message: 'This is an alert message.',
          buttons: ['OK']
        });
    }
  }
