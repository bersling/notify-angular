import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { NotifyService } from './notify.service';

export { NotifyService } from './notify.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MessageComponent],
  exports: [MessageComponent]
})
export class NotifyModule {

  static forRoot() {
    return {
      ngModule: NotifyModule,
      providers: [NotifyService]
    }
  }
}
