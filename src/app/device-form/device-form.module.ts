import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceFormComponent } from './device-form.component';
import { DeviceFormRoutingModule } from './device-form-routing.module';
import { FormsModule }   from '@angular/forms';       


@NgModule({
  imports: [
    CommonModule,
    DeviceFormRoutingModule,
    FormsModule
  ],
  declarations: [DeviceFormComponent]
})
export class DeviceFormModule { }
