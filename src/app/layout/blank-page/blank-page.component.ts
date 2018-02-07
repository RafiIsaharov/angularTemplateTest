import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviceComponent } from '../../device/device.component';
import { CardListService } from '../../services/card-list.service';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    @ViewChild('jbChildInstance') public firstJbChild: DeviceComponent;

    public cardList : DeviceComponent [] = [];

    constructor(private _cardListService : CardListService) {}

    ngOnInit() {}
}
