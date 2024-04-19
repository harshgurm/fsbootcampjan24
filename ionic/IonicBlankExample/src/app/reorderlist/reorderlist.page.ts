import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-reorderlist',
  templateUrl: './reorderlist.page.html',
  styleUrls: ['./reorderlist.page.scss'],
})
export class ReorderlistPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleReorder(event: CustomEvent<ItemReorderEventDetail>){
    console.log(`Moved from ${event.detail.from} to ${event.detail.to}`);

    event.detail.complete();
  }

}
