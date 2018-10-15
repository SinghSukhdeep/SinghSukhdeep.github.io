import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable()
export class CommonService {
    protected readonly NETWORK_RETRY_ATTEMPTS: number = 1;

    constructor(protected http: HttpClient, public snackBar: MatSnackBar) {
    }

    /**
     * Throws http error
     *
     * @author Sukhdeep Singh
     * @param error HttpErrorResponse object
     * @return http error as an observable object
     */
    protected throwHttpError(error: HttpErrorResponse): Observable<never> {
        return observableThrowError(error || 'An Error Occurred');
    }

    /**
     * Returns HttpErrorResponse object for internet connection error
     *
     * @author Sukhdeep Singh
     * @return HttpErrorResponse object containing network connection error
     */
    protected getNetworkErrorResponse(status: number = -10, statusText: string = "Not connected. Please check your internet connection"): HttpErrorResponse {
        return new HttpErrorResponse({
            status: status,
            statusText: statusText
        });
    }

    /**
     * Makes http call to retrieve data
     *
     * @author Sukhdeep Singh
     * @param params parameters to pass along with the request
     * @return results returned by server as an observable object
     */
    makeRequest(url: string, params: Object): Observable<any> {
        if (!navigator.onLine) {
            return this.throwHttpError(this.getNetworkErrorResponse());
        }
        const httpOptions = {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        };
        return this.http.post(url, JSON.stringify(params), httpOptions).pipe(retry(this.NETWORK_RETRY_ATTEMPTS));
    }


    /**
     * Handles error returned by http request and show appropriate message
     *
     * @author Sukhdeep Singh
     * @param httpErrorResponse http error object
     */
    handleHttpError(httpErrorResponse: HttpErrorResponse): void {
        switch (httpErrorResponse.status) {
            case 413:
                this.snackBar.open('Error : The selected file is too large. Please choose another file.', 'OK', {
                    duration: 6000,
                });
                break;

            case 403:
                this.snackBar.open('Error : You do not have access to this resource. Please try again..', 'OK', {
                    duration: 6000,
                });
                break;

            case 404:
                this.snackBar.open('Error : Requested resource does not exist or may have been deleted. Please try again.', 'OK', {
                    duration: 6000,
                });
                break;

            case 408:
                this.snackBar.open('Error : Request timed out. Please try again.', 'OK', {
                    duration: 6000,
                });
                break;

            case 503:
                this.snackBar.open('Error : Service temporarily unavailable. Please try again in few minutes.', 'OK', {
                    duration: 6000,
                });
                break;

            case 504:
                this.snackBar.open('Error : Request timed out. Please try again.', 'OK', {
                    duration: 6000,
                });
                break;

            case 200:
                this.snackBar.open('Error : Server sent incorrect data.', 'OK', {
                    duration: 6000,
                });
                break;

            default:
                if (httpErrorResponse.statusText) {
                    this.snackBar.open('Error : ' + httpErrorResponse.statusText, 'OK', {
                        duration: 6000,
                    });
                } else {
                    this.snackBar.open('Something went wrong. Please try again', 'OK', {
                        duration: 6000,
                    });
                }
                break;
        }
    }

    generateRandomNumber() {
        return Math.floor(Math.random() * 10);
    }
}
