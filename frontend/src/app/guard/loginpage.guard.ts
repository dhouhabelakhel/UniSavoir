import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginpageGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
 const etat=localStorage.getItem("etat");
 if(!etat)
 return true;
else return false;
};
