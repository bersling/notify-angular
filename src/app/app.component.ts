import { Component } from '@angular/core';

import { NotifyService } from './notify';
import {AppNotification, NotificationPosition, NotifyOptions} from './notify/notify.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  color: string;
  background: string;
  timer: number;
  position: NotificationPosition = {

  }

  constructor(
    private notifyService: NotifyService
  ) { }

  notify() {
    console.log(this.position);
    const options: AppNotification = {
      color: this.color,
      timer: this.timer,
      background: this.background,
      position: this.position
    }

    this.notifyService.success('Hello World', options);
  }

}
