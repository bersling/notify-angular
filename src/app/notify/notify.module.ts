import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NotifyComponent} from './notify-component/notify.component';
import {NotifyService} from './notify.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotifyComponent],
  exports: [NotifyComponent]
})
export class NotifyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NotifyModule,
      providers: [NotifyService]
    }
  }
}
