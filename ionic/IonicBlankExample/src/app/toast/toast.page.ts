import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  toastOpen = false;

  constructor(private toastController:ToastController) { }

  ngOnInit() {
  }

  open(val:boolean){
    this.toastOpen = val;
  }

  async showToast(){
    const toast = await this.toastController.create({
      message: "Another way of writing toast",
      duration: 3000,
      position: "middle",
      icon: "airplane"
    })

    await toast.present();
    
  }

  public toastButtons = [
    {
      text: 'Details',
      role: 'info',
      handler: () => {
        console.log('Detail button is clicked')
      }
    },
    {
      text: 'Dismiss',
      role: 'cancel',
      handler: () => {
        console.log('Cancel button is clicked')
      }
    },
  ]

}
