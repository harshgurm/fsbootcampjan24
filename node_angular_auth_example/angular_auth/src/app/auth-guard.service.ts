import { Injectable, inject } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild } from '@angular/router';
import { AuthdataService } from './authdata.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  auth: AuthdataService = inject(AuthdataService);
  router: Router = inject(Router);

  // constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    //logic to verify whether the user is authenticated or not
    if(!this.auth.isAuthenticated()){
      this.router.navigate(['signin']);
      return false;
    }
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
    return this.canActivate(route, state);
  }

}
