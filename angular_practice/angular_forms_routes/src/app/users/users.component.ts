import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

route = inject(ActivatedRoute);

  users: any = [
    {id: 1, name: 'Harsh', description: 'Harsh Description'},
    {id: 2, name: 'Sam', description: 'Sam Description'},
    {id: 3, name: 'George', description: 'George Description'},
  ]

  description!: string;

  ngOnInit(){
    this.route.paramMap.subscribe(params => {      
      let user_id = params.get('id');
      if(user_id){
         let user = this.users.find((x:any) => x.id == user_id);
         if(user){
          this.description = user.description;
         }         
      }
    })
  }
}
