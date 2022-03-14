import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  async ngOnInit() {
    var res = await fetch('http://localhost/api/users').then(r => r.json());
    console.log(res);
  }
}
