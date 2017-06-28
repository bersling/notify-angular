import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {AppNotification, NotifyOptions} from './notify.model';

const DEFAULT_POSITION = {
  bottom: 0,
  right: 0
};

@Injectable()
export class NotifyService {

  private _notifications: Subject<AppNotification> = new Subject();

  constructor() {}

  defaultNotificationFactory (message, options?: NotifyOptions): AppNotification {
    const notification: AppNotification = {
      message: message,
      withShadow: options && options.withShadow !== undefined ? options.withShadow : true,
      position: options && options.position || DEFAULT_POSITION
    };
    return notification
  }

  success(message, options?: NotifyOptions) {
    const notification = this.defaultNotificationFactory(message, options);
    notification.type = 'success';
    notification.color =  options && options.color || '#3C763D';
    notification.background = options && options.background || '#DFF0D8';
    notification.timer = options && options.timer || 1500;
    this._notifications.next(notification);
  }

  error(message, options?: NotifyOptions) {
    const notification = this.defaultNotificationFactory(message, options);
    notification.type = 'error';
    notification.color =  options && options.color || '#A94442';
    notification.background = options && options.background || '#F2DEDE';
    notification.timer = options && options.timer || 3000;
    this._notifications.next(notification);
  }

  public get notifications() { // TODO: make this const somehow. static?
    return this._notifications;
  }

}


