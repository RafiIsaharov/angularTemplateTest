import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DeviceFormComponent } from './device-form.component';

const routes: Routes = [
  {
      path: '', component: DeviceFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DeviceFormRoutingModule { }
