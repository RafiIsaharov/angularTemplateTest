"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var card_list_service_1 = require("./card-list.service");
describe('CardListService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [card_list_service_1.CardListService]
        });
    });
    it('should be created', testing_1.inject([card_list_service_1.CardListService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=card-list.service.spec.js.map