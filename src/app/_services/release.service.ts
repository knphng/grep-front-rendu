import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {ServiceToolbox} from "./service-toolbox";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";
import {Task} from "../_models/task";
import {catchError, tap} from "rxjs/operators";
import {Release} from "../_models/release";

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {

    /** get url from environment file */
    private url = environment.API.PROTOCOL + environment.API.URL + environment.API.ROOT;

    // tool box for error, log and security headers
    toolbox: ServiceToolbox;

    /**
     * Constructor
     * @param {HttpClient} http
     * @param snackbar
     * @param authenticationService
     */
    constructor(
        private http: HttpClient,
        private snackbar: MatSnackBar,
        private authenticationService: AuthenticationService,
    ) {
        this.toolbox = new ServiceToolbox('ReleaseService', snackbar, authenticationService);
    }

    /**
     * get all releases catalogue
     * @returns {Observable<Release[]>}
     */
    getAll(): Observable<Release[]> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = this.url + environment.URL.RELEASE.GET_ALL;
        return this.http.get<Release[]>(url, httpOptions).pipe(
            tap(res => this.toolbox.log(`Loading releases. length : ` + res.length)),
            catchError(this.toolbox.handleError<Release[]>(this.getAll.name))
        );
    }

    /**
     * get all releases catalogue
     * @returns {Observable<Release>}
     */
    get(uuid): Observable<Release> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        let url = this.url + environment.URL.RELEASE.GET;
        url = url.replace('<uuid>', uuid);
        return this.http.get<Release>(url, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Loading release. uuid : ` + res.uuid)),
                catchError(this.toolbox.handleError<Release>(this.get.name))
            );
    }

    /**
     * add a new release
     * @param {Release} release
     * @returns {Observable<Release>}
     */
    post(release: Release): Observable<Release> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = `${this.url}${environment.URL.RELEASE.POST}`;
        return this.http.post<Release>(url, release, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Post release. uuid : ` + res.uuid)),
                catchError(this.toolbox.handleError<Release>(this.post.name))
            );
    }

    /**
     * update a release
     * @param {Release} release
     * @returns {Observable<Release>}
     */
    put(release: Release): Observable<Release> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = `${this.url}${environment.URL.RELEASE.PUT}`.replace('<uuid>', release.uuid);
        // Appel de l'API
        return this.http.put<Release>(url, release, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Put project. uuid : ` + res.uuid)),
                catchError(this.toolbox.handleError<Release>(this.put.name))
            );
    }

    /**
     * delete a release
     * @param release
     */
    delete(release: Release): Observable<any> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = `${this.url}${environment.URL.RELEASE.DELETE}`.replace('<uuid>', release.uuid);
        // Appel de l'API
        return this.http.delete<any>(url, httpOptions)
            .pipe(
                catchError(this.toolbox.handleError<Release>(this.delete.name))
            );
    }

    getTasks(uuid): Observable<Task[]> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        let url = this.url + environment.URL.RELEASE.GET_TASKS;
        console.log(url);
        url = url.replace('<uuid>', uuid);
        return this.http.get<Task[]>(url, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Loading tasks. length : ` + res.length)),
                catchError(this.toolbox.handleError<Task[]>(this.getTasks.name))
            );
    }
}
