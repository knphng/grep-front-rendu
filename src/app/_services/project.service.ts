import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../_models/project';
import {ServiceToolbox} from './service-toolbox';
import {MatSnackBar} from '@angular/material';
import {AuthenticationService} from './authentication.service';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {

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
     * get all projects
     * @returns {Observable<Project[]>}
     */
    getAll(): Observable<Project[]> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = this.url + environment.URL.PROJECT.GET_ALL;
        return this.http.get<Project[]>(url, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Loading projects. length : ` + res.length)),
                catchError(this.toolbox.handleError<Project[]>(this.getAll.name))
            );
    }
    /**
     * get all light projects
     * @returns {Observable<Project[]>}
     */
    getAllLight(): Observable<Project[]> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = this.url + environment.URL.PROJECT.GET_ALL_LIGHT;
        return this.http.get<Project[]>(url, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Loading projects. length : ` + res.length)),
                catchError(this.toolbox.handleError<Project[]>(this.getAllLight.name))
            );
    }

    /**
     * get all projects catalogue
     * @returns {Observable<Project>}
     */
    get(uuid): Observable<Project> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        let url = this.url + environment.URL.PROJECT.GET;
        url = url.replace('<uuid>', uuid);
        return this.http.get<Project>(url, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Loading project. uuid : ` + res.uuid)),
                catchError(this.toolbox.handleError<Project>(this.get.name))
            );
    }

    /**
     * add a new project
     * @param {Project} project
     * @returns {Observable<Project>}
     */
    post(project: Project): Observable<Project> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = `${this.url}${environment.URL.PROJECT.POST}`;
        return this.http.post<Project>(url, project, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Post project. uuid : ` + res.uuid)),
                catchError(this.toolbox.handleError<Project>(this.post.name))
            );
    }

    /**
     * update a project
     * @param {Project} project
     * @returns {Observable<Project>}
     */
    put(project: Project): Observable<Project> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = `${this.url}${environment.URL.PROJECT.PUT}`.replace('<uuid>', project.uuid);
        // Appel de l'API
        return this.http.put<Project>(url, project, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Put project. uuid : ` + project.uuid)),
                catchError(this.toolbox.handleError<Project>(this.put.name))
            );
    }

    /**
     * delete a project
     * @param project
     */
    delete(project: Project): Observable<any> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = `${this.url}${environment.URL.PROJECT.DELETE}`.replace('<uuid>', project.uuid);
        // Appel de l'API
        return this.http.delete<any>(url, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Delete project. uuid : ` + project.uuid)),
                catchError(this.toolbox.handleError<Project>(this.delete.name))
            );
    }
}
