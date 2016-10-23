import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';
RouterModule;
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        FormsModule,
                        RouterModule.forRoot([
                            {
                                path: 'heroes',
                                component: HeroesComponent
                            },
                            {
                                path: 'dashboard',
                                component: DashboardComponent
                            },
                            {
                                path: 'detail/:id',
                                component: HeroDetailComponent
                            },
                            {
                                path: '',
                                redirectTo: '/dashboard',
                                pathMatch: 'full'
                            }
                        ])
                    ],
                    declarations: [AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent],
                    providers: [HeroService],
                    bootstrap: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map