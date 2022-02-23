import { Component, OnInit } from '@angular/core';
import { AlertController, IonButtons } from '@ionic/angular';
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
  async onClick() {
    const alert = await this.alertaCrl.create({
      cssClass: 'my-custom-class',
      backdropDismiss: false,
      header: 'Alerta',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertaCrl.create({
      cssClass: 'my-custom-class',
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message',
      buttons: ['cancel', 'Open Modal', 'Delete']
    });
    await alert.present();
  }
  async presentAlertPrompt() {
    const alert = await this.alertaCrl.create({
      cssClass: 'my-custom-class',
      header: 'Cuestionario!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data:any) => {
            console.log('Confirm Ok');
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }
}
