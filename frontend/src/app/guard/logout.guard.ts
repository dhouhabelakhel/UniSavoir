import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const logoutGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const etat=localStorage.getItem("etat");
  if(etat=="conectedUser"||etat=="conectedAdmin")
  return false;
 else return true;
};
