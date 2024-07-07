import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {

  alertButton = ['Action'];
  inputBtnEx = ['Submit'];
  isAlertOpen = false;

  constructor(private alertController:AlertController) { }

  ngOnInit() {
  }

  openAlert(jair:boolean){
    console.log(jair,' Jair for you');
    this.isAlertOpen = jair;
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
      text: 'Install',
      role: 'confirm',
      handler:() => {
        console.log('Install is clicked')
      }
    },
  ];

  showRole(ev:any) {
    console.log('The role is', ev.detail.role);
  }

  public alertInputs = [
    {
      placeholder: 'First Name'
    },
    {
      placeholder: 'Last Name',      
    },
    {
      type: 'number',
      placeholder: 'Age',
      max: 100,
      maxlength: 100,
      min: 1
    }
  ]

}
