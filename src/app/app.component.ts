import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'menuhamburguesa';

  opened: boolean;

  handleEmitter($event) {
    this.opened = $event;
  }
}
