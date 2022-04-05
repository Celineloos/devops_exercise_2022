import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Show users';

  constructor(private usersService: UsersService) {}

  users: any;

  async ngOnInit() {
		await this.usersService.GetUsers().subscribe((result) => {
      this.users = result;
      console.log(this.users);
		}, (err) => {
			console.log('Error: ', err.error.error);
		});
	}
}
