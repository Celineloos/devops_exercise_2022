import { Component } from '@angular/core';
import { environment } from "../environments/environment";
import { User } from "../models/user";
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Show users';

  constructor(private usersService: UsersService) {}

  user: User | undefined;

  async ngOnInit() {
    await this.usersService.GetUsers().subscribe((result) => {
      this.user = result[0];
      console.log(this.user);
		}, (err) => {
			console.log('Error: ', err.error.error);
		});
	}
}