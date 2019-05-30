import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../_models/customer';
import {ServiceToolbox} from './service-toolbox';
import {MatSnackBar} from '@angular/material';
import {AuthenticationService} from './authentication.service';
import {catchError, tap} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    /** get url from environment file */
        // url = 'http://localhost:3000';
    private url = environment.API.PROTOCOL + environment.API.URL + environment.API.ROOT;
    toolbox: ServiceToolbox;

    /**
     * Constructor
     * @param {HttpClient} http
     */
    constructor(
        private http: HttpClient,
        private snackbar: MatSnackBar,
        private authenticationService: AuthenticationService,
    ) {
        this.toolbox = new ServiceToolbox('CustomerService', snackbar, authenticationService);
    }

    /**
     * get all customers catalogue
     * @returns {Observable<Customer[]>}
     */
    getAll(): Observable<Customer[]> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = this.url + environment.URL.CUSTOMER.GET_ALL;
        return this.http.get<Customer[]>(url, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Loading customers. length : ` + res.length)),
                catchError(this.toolbox.handleError<Customer[]>(this.getAll.name))
            );
    }

    /**
     * get all customers catalogue
     * @returns {Observable<Customer>}
     */
    get(uuid): Observable<Customer> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        let url = this.url + environment.URL.CUSTOMER.GET;
        url = url.replace('<uuid>', uuid);
        return this.http.get<Customer>(url, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Loading customer. uuid : ` + res.uuid)),
                catchError(this.toolbox.handleError<Customer>(this.get.name))
            );
    }

    /**
     * add a new Customer
     * @param customer: Custommer
     * @returns {Observable<Customer>}
     */
    post(customer: Customer): Observable<Customer> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = `${this.url}${environment.URL.CUSTOMER.POST}`;
        return this.http.post<Customer>(url, customer, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Post customer. uuid : ` + res.uuid)),
                catchError(this.toolbox.handleError<Customer>(this.post.name))
            );
    }

    /**
     * update a customer
     * @param {Customer} customer
     * @returns {Observable<Customer>}
     */
    put(customer: Customer): Observable<Customer> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = `${this.url}${environment.URL.CUSTOMER.PUT}`.replace('<uuid>', customer.uuid);
        // Appel de l'API
        return this.http.put<Customer>(url, customer, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Put customer. uuid : ` + customer.uuid)),
                catchError(this.toolbox.handleError<Customer>(this.put.name))
            );
    }

    /**
     * delete a customer
     * @param customer
     */
    delete(customer: Customer): Observable<any> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = `${this.url}${environment.URL.CUSTOMER.DELETE}`.replace('<uuid>', customer.uuid);
        // Appel de l'API
        return this.http.delete<any>(url)
            .pipe(
                tap(res => this.toolbox.log(`Delete customer. uuid : ` + customer.uuid)),
                catchError(this.toolbox.handleError<Customer>(this.delete.name))
            );
    }
}
