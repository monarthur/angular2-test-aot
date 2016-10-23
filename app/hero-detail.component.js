import { Component, Input } from '@angular/core';
export var HeroDetailComponent = (function () {
    function HeroDetailComponent() {
    }
    HeroDetailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-hero-detail',
                    template: "\n    <div *ngIf=\"hero\">\n        <h2>{{hero.name}} details!</h2>\n        <div><label>id: </label>{{hero.id}}</div>\n        <div>\n            <label>name: </label>\n            <input [(ngModel)]=\"hero.name\" placeholder=\"name\">\n        </div>\n    </div>\n    "
                },] },
    ];
    /** @nocollapse */
    HeroDetailComponent.ctorParameters = [];
    HeroDetailComponent.propDecorators = {
        'hero': [{ type: Input },],
    };
    return HeroDetailComponent;
}());
//# sourceMappingURL=hero-detail.component.js.map