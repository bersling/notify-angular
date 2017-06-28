import { Component } from '@angular/core';

import { NotifyService } from './notify';
import {AppNotification, NotificationPosition, NotifyOptions} from './notify/notify.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message = 'Hello World';
  color: string;
  background: string;
  timer: number;
  position: NotificationPosition = {
    bottom: 0,
    right: 0
  };
  withShadow = true;

  constructor(
    private notifyService: NotifyService
  ) { }

  notify(type?: string) {
    const options: AppNotification = {
      color: this.color,
      background: this.background,
      position: this.position,
      timer: this.timer,
      withShadow: this.withShadow
    };

    if (type === 'error') {
      this.notifyService.error(this.message, options);
    } else {
      this.notifyService.success(this.message, options);
    }
  }

}
