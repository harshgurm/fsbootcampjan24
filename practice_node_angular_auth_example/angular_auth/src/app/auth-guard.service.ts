import { Injectable } from '@angular/core';
import { AuthdataService } from './authdata.service';
import {  Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public auth: AuthdataService, public router: Router) { }

  CanActivateFn(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['signin']);
      return false;
    }
    return true;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  boolean  | Promise<boolean> {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['signin']);
      return false;
    }
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  boolean | Promise<boolean> {
    return this.canActivate(route, state);
  }
}
