import { FormModule } from './../layout/form/form.module';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.scss']
})
export class DeviceFormComponent implements OnInit {
    public deviceName: string;
    public deviceOwner: string;
    public notification: string;
    public authorization: string;
    public purchaseAssistant: string;
    public payBy: string;

  constructor() {
    
    var deviceName = this.deviceName;
    var deviceOwner = this.deviceOwner
    var notification = this.notification;

   }

   onSubmit() {
      alert (this.deviceName);      
      var tomer = new DeviceFormComponent();      
      console.log ("name is " + this.deviceName);
      console.log(tomer);
      console.log(tomer.authorization);
      

  }

  ngOnInit() {
  }

}
