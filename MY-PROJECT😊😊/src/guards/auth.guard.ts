import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService= inject(AuthService);
  const router=inject(Router)

 if(authService.isAuth==false){
    router.navigate(['/login']);
    return false;
 }
 return true;
};
