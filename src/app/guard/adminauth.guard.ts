import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminauthGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const etat=localStorage.getItem("etat");
  if(etat=="conectedAdmin")
  return true;
 else return false;
  return true;
};
