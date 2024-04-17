import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {

  alertButton = ['Action'];
  isAlertOpen = false;

  constructor(private alertController:AlertController) { }

  ngOnInit() {
  }

  openAlert(val:boolean){
    this.isAlertOpen = val;
  }

  async buttonClicked(){
    const alert = await this.alertController.create({
      header: 'AlertController Example',
      subHeader: 'This is how we use AlterController',
      message: 'This is an example of AlertController which gives us more options',
      buttons: ['Action']
    })

    await alert.present();

  }

  public buttonExample = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler:() => {
        console.log('Cancel is clicked')
      }
    },
    {
      text: 'OK',
      role: 'confirm',
      handler:() => {
        console.log('OK is clicked')
      }
    },
  ];

  showRole(ev:any) {
    console.log('The role is', ev.detail.role);
  }

}
