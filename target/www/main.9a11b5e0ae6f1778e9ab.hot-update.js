webpackHotUpdate("main",{

/***/ "./src/main/webapp/app/app.module.ts":
/*!*******************************************!*\
  !*** ./src/main/webapp/app/app.module.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n__webpack_require__(/*! ./vendor.ts */ \"./src/main/webapp/app/vendor.ts\");\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\nvar platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ \"./node_modules/@angular/platform-browser/fesm5/platform-browser.js\");\nvar http_1 = __webpack_require__(/*! @angular/common/http */ \"./node_modules/@angular/common/fesm5/http.js\");\nvar http_2 = __webpack_require__(/*! @angular/common/http */ \"./node_modules/@angular/common/fesm5/http.js\");\nvar ngx_webstorage_1 = __webpack_require__(/*! ngx-webstorage */ \"./node_modules/ngx-webstorage/dist/app.js\");\nvar ng_jhipster_1 = __webpack_require__(/*! ng-jhipster */ \"./node_modules/ng-jhipster/index.js\");\nvar auth_interceptor_1 = __webpack_require__(/*! ./blocks/interceptor/auth.interceptor */ \"./src/main/webapp/app/blocks/interceptor/auth.interceptor.ts\");\nvar auth_expired_interceptor_1 = __webpack_require__(/*! ./blocks/interceptor/auth-expired.interceptor */ \"./src/main/webapp/app/blocks/interceptor/auth-expired.interceptor.ts\");\nvar errorhandler_interceptor_1 = __webpack_require__(/*! ./blocks/interceptor/errorhandler.interceptor */ \"./src/main/webapp/app/blocks/interceptor/errorhandler.interceptor.ts\");\nvar notification_interceptor_1 = __webpack_require__(/*! ./blocks/interceptor/notification.interceptor */ \"./src/main/webapp/app/blocks/interceptor/notification.interceptor.ts\");\nvar shared_1 = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\nvar core_2 = __webpack_require__(/*! app/core */ \"./src/main/webapp/app/core/index.ts\");\nvar app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ \"./src/main/webapp/app/app-routing.module.ts\");\nvar home_module_1 = __webpack_require__(/*! ./home/home.module */ \"./src/main/webapp/app/home/home.module.ts\");\nvar account_module_1 = __webpack_require__(/*! ./account/account.module */ \"./src/main/webapp/app/account/account.module.ts\");\nvar entity_module_1 = __webpack_require__(/*! ./entities/entity.module */ \"./src/main/webapp/app/entities/entity.module.ts\");\n// jhipster-needle-angular-add-module-import JHipster will add new module here\nvar layouts_1 = __webpack_require__(/*! ./layouts */ \"./src/main/webapp/app/layouts/index.ts\");\nvar ranking_component_1 = __webpack_require__(/*! ./ranking/ranking.component */ \"./src/main/webapp/app/ranking/ranking.component.ts\");\nvar JiuzhangquanzhankeAppModule = /** @class */ (function () {\n    function JiuzhangquanzhankeAppModule() {\n    }\n    JiuzhangquanzhankeAppModule = tslib_1.__decorate([\n        core_1.NgModule({\n            imports: [\n                platform_browser_1.BrowserModule,\n                app_routing_module_1.JiuzhangquanzhankeAppRoutingModule,\n                ngx_webstorage_1.Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),\n                shared_1.JiuzhangquanzhankeSharedModule,\n                core_2.JiuzhangquanzhankeCoreModule,\n                home_module_1.JiuzhangquanzhankeHomeModule,\n                account_module_1.JiuzhangquanzhankeAccountModule,\n                entity_module_1.JiuzhangquanzhankeEntityModule,\n                http_1.HttpClientModule\n                // jhipster-needle-angular-add-module JHipster will add new module here\n            ],\n            declarations: [layouts_1.JhiMainComponent, layouts_1.NavbarComponent, layouts_1.ErrorComponent, layouts_1.PageRibbonComponent, layouts_1.FooterComponent, ranking_component_1.RankingComponent],\n            providers: [\n                {\n                    provide: http_2.HTTP_INTERCEPTORS,\n                    useClass: auth_interceptor_1.AuthInterceptor,\n                    multi: true,\n                    deps: [ngx_webstorage_1.LocalStorageService, ngx_webstorage_1.SessionStorageService]\n                },\n                {\n                    provide: http_2.HTTP_INTERCEPTORS,\n                    useClass: auth_expired_interceptor_1.AuthExpiredInterceptor,\n                    multi: true,\n                    deps: [core_1.Injector]\n                },\n                {\n                    provide: http_2.HTTP_INTERCEPTORS,\n                    useClass: errorhandler_interceptor_1.ErrorHandlerInterceptor,\n                    multi: true,\n                    deps: [ng_jhipster_1.JhiEventManager]\n                },\n                {\n                    provide: http_2.HTTP_INTERCEPTORS,\n                    useClass: notification_interceptor_1.NotificationInterceptor,\n                    multi: true,\n                    deps: [core_1.Injector]\n                }\n            ],\n            bootstrap: [layouts_1.JhiMainComponent]\n        })\n    ], JiuzhangquanzhankeAppModule);\n    return JiuzhangquanzhankeAppModule;\n}());\nexports.JiuzhangquanzhankeAppModule = JiuzhangquanzhankeAppModule;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5tb2R1bGUudHM/YzVmOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwRUFBcUI7QUFFckIsb0dBQW1EO0FBQ25ELG9KQUEwRDtBQUMxRCw2R0FBd0Q7QUFDeEQsNkdBQXlEO0FBQ3pELDhHQUEyRjtBQUMzRixrR0FBOEM7QUFDOUMsMEpBQXdFO0FBQ3hFLGtMQUF1RjtBQUN2RixrTEFBd0Y7QUFDeEYsa0xBQXdGO0FBQ3hGLDhGQUE0RDtBQUM1RCx3RkFBd0Q7QUFDeEQsMEhBQTBFO0FBQzFFLCtHQUFrRTtBQUNsRSw4SEFBMkU7QUFDM0UsNkhBQTBFO0FBQzFFLDhFQUE4RTtBQUM5RSwrRkFBb0g7QUFDcEgsdUlBQStEO0FBNEMvRDtJQUFBO0lBQTBDLENBQUM7SUFBOUIsMkJBQTJCO1FBMUN2QyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsZ0NBQWE7Z0JBQ2IsdURBQWtDO2dCQUNsQyw4QkFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUN4RCx1Q0FBOEI7Z0JBQzlCLG1DQUE0QjtnQkFDNUIsMENBQTRCO2dCQUM1QixnREFBK0I7Z0JBQy9CLDhDQUE4QjtnQkFDOUIsdUJBQWdCO2dCQUNoQix1RUFBdUU7YUFDMUU7WUFDRCxZQUFZLEVBQUUsQ0FBQywwQkFBZ0IsRUFBRSx5QkFBZSxFQUFFLHdCQUFjLEVBQUUsNkJBQW1CLEVBQUUseUJBQWUsRUFBRSxvQ0FBZ0IsQ0FBQztZQUN6SCxTQUFTLEVBQUU7Z0JBQ1A7b0JBQ0ksT0FBTyxFQUFFLHdCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLGtDQUFlO29CQUN6QixLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsQ0FBQyxvQ0FBbUIsRUFBRSxzQ0FBcUIsQ0FBQztpQkFDckQ7Z0JBQ0Q7b0JBQ0ksT0FBTyxFQUFFLHdCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLGlEQUFzQjtvQkFDaEMsS0FBSyxFQUFFLElBQUk7b0JBQ1gsSUFBSSxFQUFFLENBQUMsZUFBUSxDQUFDO2lCQUNuQjtnQkFDRDtvQkFDSSxPQUFPLEVBQUUsd0JBQWlCO29CQUMxQixRQUFRLEVBQUUsa0RBQXVCO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsQ0FBQyw2QkFBZSxDQUFDO2lCQUMxQjtnQkFDRDtvQkFDSSxPQUFPLEVBQUUsd0JBQWlCO29CQUMxQixRQUFRLEVBQUUsa0RBQXVCO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsQ0FBQyxlQUFRLENBQUM7aUJBQ25CO2FBQ0o7WUFDRCxTQUFTLEVBQUUsQ0FBQywwQkFBZ0IsQ0FBQztTQUNoQyxDQUFDO09BQ1csMkJBQTJCLENBQUc7SUFBRCxrQ0FBQztDQUFBO0FBQTlCLGtFQUEyQiIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvYXBwLm1vZHVsZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi92ZW5kb3IudHMnO1xuXG5pbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nMldlYnN0b3JhZ2UsIExvY2FsU3RvcmFnZVNlcnZpY2UsIFNlc3Npb25TdG9yYWdlU2VydmljZSB9IGZyb20gJ25neC13ZWJzdG9yYWdlJztcbmltcG9ydCB7IEpoaUV2ZW50TWFuYWdlciB9IGZyb20gJ25nLWpoaXBzdGVyJztcbmltcG9ydCB7IEF1dGhJbnRlcmNlcHRvciB9IGZyb20gJy4vYmxvY2tzL2ludGVyY2VwdG9yL2F1dGguaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgQXV0aEV4cGlyZWRJbnRlcmNlcHRvciB9IGZyb20gJy4vYmxvY2tzL2ludGVyY2VwdG9yL2F1dGgtZXhwaXJlZC5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBFcnJvckhhbmRsZXJJbnRlcmNlcHRvciB9IGZyb20gJy4vYmxvY2tzL2ludGVyY2VwdG9yL2Vycm9yaGFuZGxlci5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25JbnRlcmNlcHRvciB9IGZyb20gJy4vYmxvY2tzL2ludGVyY2VwdG9yL25vdGlmaWNhdGlvbi5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBKaXV6aGFuZ3F1YW56aGFua2VTaGFyZWRNb2R1bGUgfSBmcm9tICdhcHAvc2hhcmVkJztcbmltcG9ydCB7IEppdXpoYW5ncXVhbnpoYW5rZUNvcmVNb2R1bGUgfSBmcm9tICdhcHAvY29yZSc7XG5pbXBvcnQgeyBKaXV6aGFuZ3F1YW56aGFua2VBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgSml1emhhbmdxdWFuemhhbmtlSG9tZU1vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XG5pbXBvcnQgeyBKaXV6aGFuZ3F1YW56aGFua2VBY2NvdW50TW9kdWxlIH0gZnJvbSAnLi9hY2NvdW50L2FjY291bnQubW9kdWxlJztcbmltcG9ydCB7IEppdXpoYW5ncXVhbnpoYW5rZUVudGl0eU1vZHVsZSB9IGZyb20gJy4vZW50aXRpZXMvZW50aXR5Lm1vZHVsZSc7XG4vLyBqaGlwc3Rlci1uZWVkbGUtYW5ndWxhci1hZGQtbW9kdWxlLWltcG9ydCBKSGlwc3RlciB3aWxsIGFkZCBuZXcgbW9kdWxlIGhlcmVcbmltcG9ydCB7IEpoaU1haW5Db21wb25lbnQsIE5hdmJhckNvbXBvbmVudCwgRm9vdGVyQ29tcG9uZW50LCBQYWdlUmliYm9uQ29tcG9uZW50LCBFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cyc7XG5pbXBvcnQgeyBSYW5raW5nQ29tcG9uZW50IH0gZnJvbSAnLi9yYW5raW5nL3JhbmtpbmcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIEppdXpoYW5ncXVhbnpoYW5rZUFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5nMldlYnN0b3JhZ2UuZm9yUm9vdCh7IHByZWZpeDogJ2poaScsIHNlcGFyYXRvcjogJy0nIH0pLFxuICAgICAgICBKaXV6aGFuZ3F1YW56aGFua2VTaGFyZWRNb2R1bGUsXG4gICAgICAgIEppdXpoYW5ncXVhbnpoYW5rZUNvcmVNb2R1bGUsXG4gICAgICAgIEppdXpoYW5ncXVhbnpoYW5rZUhvbWVNb2R1bGUsXG4gICAgICAgIEppdXpoYW5ncXVhbnpoYW5rZUFjY291bnRNb2R1bGUsXG4gICAgICAgIEppdXpoYW5ncXVhbnpoYW5rZUVudGl0eU1vZHVsZSxcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZVxuICAgICAgICAvLyBqaGlwc3Rlci1uZWVkbGUtYW5ndWxhci1hZGQtbW9kdWxlIEpIaXBzdGVyIHdpbGwgYWRkIG5ldyBtb2R1bGUgaGVyZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbSmhpTWFpbkNvbXBvbmVudCwgTmF2YmFyQ29tcG9uZW50LCBFcnJvckNvbXBvbmVudCwgUGFnZVJpYmJvbkNvbXBvbmVudCwgRm9vdGVyQ29tcG9uZW50LCBSYW5raW5nQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICAgICAgICB1c2VDbGFzczogQXV0aEludGVyY2VwdG9yLFxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgICBkZXBzOiBbTG9jYWxTdG9yYWdlU2VydmljZSwgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgICAgICAgIHVzZUNsYXNzOiBBdXRoRXhwaXJlZEludGVyY2VwdG9yLFxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgICBkZXBzOiBbSW5qZWN0b3JdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgICAgICAgdXNlQ2xhc3M6IEVycm9ySGFuZGxlckludGVyY2VwdG9yLFxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgICBkZXBzOiBbSmhpRXZlbnRNYW5hZ2VyXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgICAgICAgIHVzZUNsYXNzOiBOb3RpZmljYXRpb25JbnRlcmNlcHRvcixcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgICAgZGVwczogW0luamVjdG9yXVxuICAgICAgICB9XG4gICAgXSxcbiAgICBib290c3RyYXA6IFtKaGlNYWluQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBKaXV6aGFuZ3F1YW56aGFua2VBcHBNb2R1bGUge31cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/app.module.ts\n");

/***/ }),

/***/ "./src/main/webapp/app/ranking/ranking.component.html":
/*!************************************************************!*\
  !*** ./src/main/webapp/app/ranking/ranking.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<p> ranking works! </p> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JhbmtpbmcvcmFua2luZy5jb21wb25lbnQuaHRtbD82Yzg2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9yYW5raW5nL3JhbmtpbmcuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHA+IHJhbmtpbmcgd29ya3MhIDwvcD4gXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/ranking/ranking.component.html\n");

/***/ }),

/***/ "./src/main/webapp/app/ranking/ranking.component.ts":
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/ranking/ranking.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\nvar RankingComponent = /** @class */ (function () {\n    function RankingComponent() {\n    }\n    RankingComponent.prototype.ngOnInit = function () {\n    };\n    RankingComponent = tslib_1.__decorate([\n        core_1.Component({\n            selector: 'jhi-ranking',\n            template: __webpack_require__(/*! ./ranking.component.html */ \"./src/main/webapp/app/ranking/ranking.component.html\"),\n            styles: []\n        }),\n        tslib_1.__metadata(\"design:paramtypes\", [])\n    ], RankingComponent);\n    return RankingComponent;\n}());\nexports.RankingComponent = RankingComponent;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JhbmtpbmcvcmFua2luZy5jb21wb25lbnQudHM/NGYyOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvR0FBa0Q7QUFPbEQ7SUFFRTtJQUFnQixDQUFDO0lBRWpCLG1DQUFRLEdBQVI7SUFDQSxDQUFDO0lBTFUsZ0JBQWdCO1FBTDVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2Qiw2QkFBYSx1RkFBMEI7WUFDdkMsTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFDOztPQUNXLGdCQUFnQixDQU81QjtJQUFELHVCQUFDO0NBQUE7QUFQWSw0Q0FBZ0IiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JhbmtpbmcvcmFua2luZy5jb21wb25lbnQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqaGktcmFua2luZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYW5raW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBSYW5raW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/ranking/ranking.component.ts\n");

/***/ })

})