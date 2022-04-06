import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	constructor(private http: HttpClient) {
	}

	GetUsers(): Observable<User[]> {
		return this.http.get<User[]>(`${environment.API_URL}/users`);
	}

	GetUserById(id: number): Observable<User> {
		return this.http.get<User>(`${environment.API_URL}/users/${id}`);
	}
}