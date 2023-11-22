import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
 const router=inject(Router);
 const etat=localStorage.getItem("etat");
 if(etat=="conected")
 return true;
else return false;
};
