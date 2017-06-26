import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyComponent } from './notify-component/notify.component';
import { NotifyService } from './notify.service';

export { NotifyService } from './notify.service';
export { NotifyComponent } from './notify-component/notify.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotifyComponent],
  exports: [NotifyComponent]
})
export class NotifyModule {

  static forRoot() {
    return {
      ngModule: NotifyModule,
      providers: [NotifyService]
    }
  }
}
