import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpValidationComponent } from './sign-up-validation/sign-up-validation.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  {
    path: 'signup', component: SignUpValidationComponent,
  },
  {
    path: 'reactive', component: ReactiveFormsComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'users/:id', component: UsersComponent
  },
  { path: '',   redirectTo: '/signup', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
