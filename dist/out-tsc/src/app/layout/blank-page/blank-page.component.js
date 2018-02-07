"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var device_component_1 = require("../../device/device.component");
var card_list_service_1 = require("../../services/card-list.service");
var BlankPageComponent = (function () {
    function BlankPageComponent(_cardListService) {
        this._cardListService = _cardListService;
        this.cardList = [];
    }
    BlankPageComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.ViewChild('jbChildInstance'),
        __metadata("design:type", device_component_1.DeviceComponent)
    ], BlankPageComponent.prototype, "firstJbChild", void 0);
    BlankPageComponent = __decorate([
        core_1.Component({
            selector: 'app-blank-page',
            templateUrl: './blank-page.component.html',
            styleUrls: ['./blank-page.component.scss']
        }),
        __metadata("design:paramtypes", [card_list_service_1.CardListService])
    ], BlankPageComponent);
    return BlankPageComponent;
}());
exports.BlankPageComponent = BlankPageComponent;
//# sourceMappingURL=blank-page.component.js.map