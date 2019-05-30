import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Task} from '../_models/task';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {catchError, tap} from 'rxjs/operators';
import {ServiceToolbox} from './service-toolbox';
import {MatSnackBar} from '@angular/material';
import {AuthenticationService} from './authentication.service';


@Injectable({
    providedIn: 'root'
})
export class TaskService {

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
        this.toolbox = new ServiceToolbox('TaskService', snackbar, authenticationService);
    }

    /**
     * get all tasks catalogue
     * @returns {Observable<Task[]>}
     */
    getAll(): Observable<Task[]> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = this.url + environment.URL.TASK.GET_ALL;
        return this.http.get<Task[]>(url, httpOptions).pipe(
            tap(res => this.toolbox.log(`Loading tasks. length : ` + res.length)),
            catchError(this.toolbox.handleError<Task[]>(this.getAll.name))
        );
    }

    /**
     * get all tasks catalogue
     * @returns {Observable<Task>}
     */
    get(uuid): Observable<Task> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        let url = this.url + environment.URL.TASK.GET;
        url = url.replace('<uuid>', uuid);
        // return this.http.get<Task>(url);
        return this.http.get<Task>(url, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Loading task. uuid : ` + res.uuid)),
                catchError(this.toolbox.handleError<Task>(this.get.name))
            );
    }

    /**
     * add a new task
     * @param {Task} task
     * @returns {Observable<Task>}
     */
    post(task: Task): Observable<Task> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = `${this.url}${environment.URL.TASK.POST}`;
        return this.http.post<Task>(url, task, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Post task. uuid : ` + res.uuid)),
                catchError(this.toolbox.handleError<Task>(this.post.name))
            );
    }

    /**
     * update a task
     * @param {Task} task
     * @returns {Observable<Task>}
     */
    put(task: Task): Observable<Task> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = `${this.url}${environment.URL.TASK.PUT}`.replace('<uuid>', task.uuid);
        // Appel de l'API
        return this.http.put<Task>(url, task, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Put project. uuid : ` + task.uuid)),
                catchError(this.toolbox.handleError<Task>(this.put.name))
            );
    }

    /**
     * delete a task
     * @param task
     */
    delete(task: Task): Observable<any> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = `${this.url}${environment.URL.TASK.DELETE}`.replace('<uuid>', task.uuid);
        // Appel de l'API
        return this.http.delete<any>(url, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Delete task. uuid : ` + task.uuid)),
                catchError(this.toolbox.handleError<Task>(this.delete.name))
            );
    }
}
