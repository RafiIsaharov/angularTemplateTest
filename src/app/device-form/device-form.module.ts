import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceFormComponent } from './device-form.component';
import { DeviceFormRoutingModule } from './device-form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DeviceFormRoutingModule
  ],
  declarations: [DeviceFormComponent]
})
export class DeviceFormModule { }
