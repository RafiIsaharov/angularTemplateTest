import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  @Input('deviceName') public cardName :string ="";
  @Input('deviceDesc') public deviceDesc :string ="";
  @Input('deviceInfo') public deviceInfo :string ="";  

  constructor() { }

  ngOnInit() {
  }

}
