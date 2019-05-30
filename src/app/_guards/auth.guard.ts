
import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material';
import { LocalStorageToolBox } from '../_services/localstorage.toolbox';
import {Route} from '../route';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private jwtHelper: JwtHelperService,
        private snackBar: MatSnackBar) {
    }

    canActivate() {
        const currentUser = LocalStorageToolBox.getCurrentUser();
        if (currentUser) {
            if (this.jwtHelper.isTokenExpired(currentUser.token)) {
                LocalStorageToolBox.cleanLocalStorage();
                this.snackBar.open('Session expirée', 'OK', { duration: 5000 });
            } else {
                return true;
            }
        }

        // Dans les autres cas, on l'envoi sur la page de connexion
        this.router.navigate(['/' + Route.LOGIN]);

        return false;
    }
}
