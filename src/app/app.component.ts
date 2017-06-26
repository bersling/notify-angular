import { Component } from '@angular/core';

import { NotifyService } from './notify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    private notifyService: NotifyService
  ) { }

  notify() {
    this.notifyService.success('Hello World');
  }

  title = 'app';
}
