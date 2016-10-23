import { Component } from '@angular/core';
import { HeroService } from './hero.service';
export var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-heroes',
                    template: "\n  <h2>My Heroes</h2>\n  <ul class=\"heroes\">\n    <li *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\" [class.selected]=\"hero === selectedHero\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n    </li>\n  </ul>\n  <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n  "
                },] },
    ];
    /** @nocollapse */
    HeroesComponent.ctorParameters = [
        { type: HeroService, },
    ];
    return HeroesComponent;
}());
//# sourceMappingURL=heroes.component.js.map