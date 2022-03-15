import { Component } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  //TODO Service.ts for nicer coded
  async ngOnInit() {
    console.log(`${environment.API_URL}`);

    var res = await fetch(`${environment.API_URL}/users`).then(r => r.json());
    console.log(res);
  }
}
