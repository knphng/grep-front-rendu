import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {MatSnackBar} from '@angular/material';
import {environment} from '../../environments/environment';
import {HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';


export class ServiceToolbox {

    /** Class name of the initiating the calls */
    className: string;

    /** MatSnackbar used for visual */
    snackbar: MatSnackBar;

    /** Authentication service */
    authenticationService: AuthenticationService;

    /**
     * Constructeur
     * @param _className : Class name of the class initiating the calls
     * @param _snackbar : user visual
     * @param _authenticationService : auth service
     */
    constructor(
        private _className: string,
        private _snackbar: MatSnackBar,
        private _authenticationService: AuthenticationService
    ) {
        this.className = _className;
        this.snackbar = _snackbar;
        this.authenticationService = _authenticationService;
    }

    /**
     * Error handle method
     * @param operation : string Name of the error
     * @param result : T Optional return object
     */
    public handleError<T>(operation = 'operation', result?: T) {
        return (error: HttpErrorResponse): Observable<T> => {

            // log in console
            this.error(error as any);

            // user visual
            if (this.snackbar) {
                if (!environment.production) {
                    this.snackbar.open(`${operation} - Error : ${error.message}`, '', {
                        duration: environment.MESSAGE.DURATION,
                    });
                }
                if (environment.production) {
                    this.snackbar.open(`An unexpected error occurred`, '', {
                        duration: environment.MESSAGE.DURATION,
                    });
                }
            }
            if (result) {
                // return
                return of(result as T);
            }
            throw new Error(operation + ' - ' + error.message);
        };
    }

    /**
     * trace log in log
     * @param message : string
     */
    public log(message: string) {
        if (!environment.production) {
            console.log(this.className + ': ' + message);
        }
    }

    /**
     * trace error in log
     * @param message : string
     */
    public error(message: string) {
        if (!environment.production) {
            console.error(this.className + ': ' + message);
        }
    }

    /**
     * handle security headers
     */
    public getHeaderAuthorization(): HttpHeaders {
        return new HttpHeaders().set('Authorization', 'JWT ' + this.authenticationService.token);
    }
}

