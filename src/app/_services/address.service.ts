import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServiceToolbox} from './service-toolbox';
import {MatSnackBar} from '@angular/material';
import {AuthenticationService} from './authentication.service';
import {catchError, tap} from 'rxjs/operators';
import {Address} from '../_models/address';


@Injectable({
    providedIn: 'root'
})
export class AddressService {

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
        this.toolbox = new ServiceToolbox('AddressService', snackbar, authenticationService);
    }

    /**
     * get all addresss catalogue
     * @returns {Observable<Address[]>}
     */
    getAll(): Observable<Address[]> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = this.url + environment.URL.ADDRESS.GET_ALL;
        return this.http.get<Address[]>(url, httpOptions).pipe(
            tap(res => this.toolbox.log(`Loading addresses. length : ` + res.length)),
            catchError(this.toolbox.handleError<Address[]>(this.getAll.name))
        );
    }

    /**
     * get all addresss catalogue
     * @returns {Observable<Address>}
     */
    get(uuid): Observable<Address> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        let url = this.url + environment.URL.ADDRESS.GET;
        url = url.replace('<uuid>', uuid);
        return this.http.get<Address>(url, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Loading address. uuid : ` + res.uuid)),
                catchError(this.toolbox.handleError<Address>(this.get.name))
            );
    }

    /**
     * add a new address
     * @param {Address} address
     * @returns {Observable<Address>}
     */
    post(address: Address): Observable<Address> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = `${this.url}${environment.URL.ADDRESS.POST}`;
        return this.http.post<Address>(url, address, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Post address. uuid : ` + res.uuid)),
                catchError(this.toolbox.handleError<Address>(this.post.name))
            );
    }

    /**
     * update a address
     * @param {Address} address
     * @returns {Observable<Address>}
     */
    put(address: Address): Observable<Address> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = `${this.url}${environment.URL.ADDRESS.PUT}`.replace('<uuid>', address.uuid);
        // Appel de l'API
        return this.http.put<Address>(url, address, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Put address. uuid : ` + address.uuid)),
                catchError(this.toolbox.handleError<Address>(this.put.name))
            );
    }

    /**
     * delete a address
     * @param address
     */
    delete(address: Address): Observable<any> {
        const headers = this.toolbox.getHeaderAuthorization();
        headers.set('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        const url = `${this.url}${environment.URL.ADDRESS.DELETE}`.replace('<uuid>', address.uuid);
        // Call de l'API
        return this.http.delete<any>(url, httpOptions)
            .pipe(
                tap(res => this.toolbox.log(`Delete address. uuid : ` + address.uuid)),
                catchError(this.toolbox.handleError<Address>(this.delete.name))
            );
    }
}
