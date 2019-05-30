import {Component, OnInit} from '@angular/core';
import {Teammate} from '../_models/teammate';
import {Router} from '@angular/router';
import {AuthenticationService} from '../_services/authentication.service';
import {CurrentUser} from '../_models/current-user';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    currentUser: CurrentUser;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit(): void {
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
