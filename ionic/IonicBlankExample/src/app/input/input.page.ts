import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  constructor(private navController: NavController) {

   }

  ngOnInit() {
  }

  moveBack(){
    this.navController.back();
  }

}
