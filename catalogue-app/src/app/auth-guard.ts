import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from './auth';

export const authGuard: CanActivateFn = (_route, _state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.estConnecte()) {
    return true;
  }

  console.log('Guard : accès refusé — redirection vers /login');
  return router.createUrlTree(['/login']);
};
