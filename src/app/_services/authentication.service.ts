import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {LocalStorageToolBox} from './localstorage.toolbox';
import {CurrentUser} from '../_models/current-user';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    public static NAME_CURRENT_USER = 'currentUser';

    private url = environment.API.PROTOCOL + environment.API.URL + environment.API.ROOT;

    private currentUserSubject: BehaviorSubject<CurrentUser>;
    public currentUser: Observable<CurrentUser>;
    public token: string;


    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<CurrentUser>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        const currentUser = LocalStorageToolBox.getCurrentUser();
        this.token = currentUser && currentUser.token;
    }

    public get currentUserValue(): CurrentUser {
        return this.currentUserSubject.value;
    }

    /**
     * Permet d'avoir le current  user
     */
    private static getCurrentUser(): CurrentUser {
        return LocalStorageToolBox.getData(this.NAME_CURRENT_USER) as CurrentUser;
    }

    /**
     * Permet d'avoir le username du current user
     */
    public static getUsernameCurrentUser(): string {
        const currentUSer = AuthenticationService.getCurrentUser();
        if (currentUSer) {
            return currentUSer.username;
        }
        return null;
    }

    register(username: string, email: string, password1: string, password2: string) {
        const url = this.url + environment.URL.REGISTRATION.POST;
        return this.http.post<CurrentUser>(url, {username, email, password1, password2})
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    LocalStorageToolBox.setCurrentUser(user);
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    login(username: string, password: string) {
        const url = this.url + environment.URL.LOGIN.POST;
        return this.http.post<CurrentUser>(url, {username, password})
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    LocalStorageToolBox.setCurrentUser(user);
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    /**
     * update and refresh Token
     */
    refreshToken(_token: string) {
        // Recupération du user
        const currentUser = LocalStorageToolBox.getCurrentUser();
        if (_token && currentUser) {
            // Mise a jour du token dans le service
            this.token = _token;

            // Mise a jour du tokem dans le user
            currentUser.token = _token;
            LocalStorageToolBox.setCurrentUser(currentUser);
        }
    }
}
