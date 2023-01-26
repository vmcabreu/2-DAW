import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class Mock {
    url = 'https://www.qando.es/docs/films.php';

    constructor(private http: HttpClient) { }

    getUsers(): Observable {
        return this.http.get(this.url + '/users');
    }
}
