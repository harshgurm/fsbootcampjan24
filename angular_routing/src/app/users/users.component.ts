import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{  

  // route = inject(ActivatedRoute);

// or

  constructor(private route:ActivatedRoute){
  }

  description!:string;

  users: any = [
    {id: 6, name: 'Prosper', description: 'Prosper description'},
    {id: 1, name: 'Harsh', description: 'Harsh description'},
    {id: 2, name: 'Nora', description: 'Nora description'},
    {id: 3, name: 'David', description: 'David description'},
    {id: 4, name: 'Renan', description: 'Renan description'},
    {id: 5, name: 'Queen', description: 'Queen description'},
  ]

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      let user_id = params.get('id');
      console.log('Link here', user_id);
      if(user_id){
        let user = this.users.find((x:any) => x.id == user_id)
        if(user){
          this.description = user.description;
        }
      }
    })
  }

}
