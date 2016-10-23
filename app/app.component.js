import { Component } from '@angular/core';
export var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-app',
                    template: "\n      <h1>{{title}}</h1>\n      <nav>\n        <a routerLink=\"/dashboard\">Dashboard</a>\n        <a routerLink=\"/heroes\">Heroes</a>\n      </nav>\n      <router-outlet></router-outlet>\n    "
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [];
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map