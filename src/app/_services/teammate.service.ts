import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Teammate} from '../_models/teammate';
import {ServiceToolbox} from './service-toolbox';
import {MatSnackBar} from '@angular/material';
import {AuthenticationService} from './authentication.service';
import {Project} from '../_models/project';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeammateService {

    /** get url from environment file */
    private url = environment.API.PROTOCOL + environment.API.URL + environment.API.ROOT;

    // tool box for error, log and security headers
    toolbox: ServiceToolbox;

    /**
     * Constructor
     * @param http
     * @param snackbar
     * @param authenticationService
     */
    constructor(
        private http: HttpClient,
        private snackbar: MatSnackBar,
        private authenticationService: AuthenticationService,
    ) {
        this.toolbox = new ServiceToolbox('ProjectService', snackbar, authenticationService);
    }

    /**
     * get all teammates catalogue
     * @returns {Observable<Teammate[]>}
     */
    getAll(): Observable<Teammate[]> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = this.url + environment.URL.TEAMMATE.GET_ALL;
        return this.http.get<Teammate[]>(url, httpOptions);
    }

    /**
     * get all teammates catalogue
     * @returns {Observable<Teammate>}
     */
    get(uuid): Observable<Teammate> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        let url = this.url + environment.URL.TEAMMATE.GET;
        url = url.replace('<uuid>', uuid);
        return this.http.get<Teammate>(url, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Loading teammate. uuid : ` + res.uuid)),
                catchError(this.toolbox.handleError<Teammate>(this.get.name))
            );
    }
    /**
     * add a new teammate
     * @param {Teammate} teammate
     * @returns {Observable<Teammate>}
     */
    post(teammate: Teammate): Observable<Teammate> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = `${this.url}${environment.URL.TEAMMATE.POST}`;
        return this.http.post<Teammate>(url, teammate, httpOptions);
    }

    /**
     * update a teammate
     * @param {Teammate} teammate
     * @returns {Observable<Teammate>}
     */
    put(teammate: Teammate): Observable<Teammate> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = `${this.url}${environment.URL.TEAMMATE.PUT}`.replace('<uuid>', teammate.uuid);
        // Appel de l'API
        return this.http.put<Teammate>(url, teammate, httpOptions);
    }

    /**
     * delete a teammate
     * @param teammate
     */
    delete(teammate: Teammate): Observable<any> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = `${this.url}${environment.URL.TEAMMATE.DELETE}`.replace('<uuid>', teammate.uuid);
        // Appel de l'API
        return this.http.delete<any>(url, httpOptions);
    }
}
