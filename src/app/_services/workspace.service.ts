import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServiceToolbox} from './service-toolbox';
import {MatSnackBar} from '@angular/material';
import {AuthenticationService} from './authentication.service';
import {catchError, tap} from 'rxjs/operators';
import {Workspace} from '../_models/workspace';
import {Project} from '../_models/project';
import {Customer} from '../_models/customer';
import {Activity} from '../_models/activity';
import {Teammate} from '../_models/teammate';

@Injectable({
    providedIn: 'root',
})
export class WorkspaceService {

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
     * get all workspaces of the connected user
     * @returns {Observable<Workspace[]>}
     */
    getAll(): Observable<Workspace[]> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = this.url + environment.URL.WORKSPACE.GET_ALL;
        return this.http.get<Workspace[]>(url, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Loading workspaces. length : ` + res.length)),
                catchError(this.toolbox.handleError<Workspace[]>(this.getAll.name))
            );
    }

    /**
     * get one workspace
     * @returns {Observable<Workspace>}
     */
    get(uuid): Observable<Workspace> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = this.url + environment.URL.WORKSPACE.GET.replace('<uuid>', uuid);
        return this.http.get<Workspace>(url, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Loading workspace. uuid : ` + res.uuid)),
                catchError(this.toolbox.handleError<Workspace>(this.get.name))
            );
    }


    /**
     * get one workspace
     * @returns {Observable<Workspace>}
     */
    getLight(uuid): Observable<Workspace> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = this.url + environment.URL.WORKSPACE.GET_LIGHT.replace('<uuid>', uuid);
        return this.http.get<Workspace>(url, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Loading workspace. uuid : ` + res.uuid)),
                catchError(this.toolbox.handleError<Workspace>(this.get.name))
            );
    }



    /**
     * get projects of the workspace
     * @returns {Observable<Project[]>}
     */
    getProjects(uuid): Observable<Project[]> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = this.url + environment.URL.WORKSPACE.GET_PROJECTS.replace('<uuid>', uuid);
        return this.http.get<Project[]>(url, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Loading Projects. length : ` + res.length)),
                catchError(this.toolbox.handleError<Project[]>(this.getProjects.name))
            );
    }
    /**
     * get customers of the workspace
     * @returns {Observable<Customer[]>}
     */
    getCustomers(uuid): Observable<Customer[]> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = this.url + environment.URL.WORKSPACE.GET_CUSTOMERS.replace('<uuid>', uuid);
        return this.http.get<Customer[]>(url, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Loading Customers. length : ` + res.length)),
                catchError(this.toolbox.handleError<Customer[]>(this.getCustomers.name))
            );
    }
    /**
     * get Activities of the workspace
     * @returns {Observable<Activity[]>}
     */
    getActivities(uuid): Observable<Activity[]> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = this.url + environment.URL.WORKSPACE.GET_ACTIVITIES.replace('<uuid>', uuid);
        return this.http.get<Activity[]>(url, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Loading Activities. length : ` + res.length)),
                catchError(this.toolbox.handleError<Activity[]>(this.getActivities.name))
            );
    }
    /**
     * get Teammates of the workspace
     * @returns {Observable<Teammate[]>}
     */
    getTeammates(uuid): Observable<Teammate[]> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = this.url + environment.URL.WORKSPACE.GET_TEAMMATES.replace('<uuid>', uuid);
        return this.http.get<Teammate[]>(url, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Loading Teammates. length : ` + res.length)),
                catchError(this.toolbox.handleError<Teammate[]>(this.getTeammates.name))
            );
    }
}
