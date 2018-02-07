import { Injectable } from '@angular/core';

@Injectable()
export class DeviceManagementService {

  constructor() { }
  device = {
    deviceName : "",
    deviceOwner : "",
    notification : "",
    authorization : "",
    purchaseAssistant : "",
    payBy : ""

  }

  addDevice() {
      console.log ("device added");
      
  }

  removeDevice() {
    console.log ("device removed");
  }

  save() {
      console.log ("device saved");
  }

}
