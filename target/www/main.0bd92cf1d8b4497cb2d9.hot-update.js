webpackHotUpdate("main",{

/***/ "./src/main/webapp/app/app.module.ts":
/*!*******************************************!*\
  !*** ./src/main/webapp/app/app.module.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n__webpack_require__(/*! ./vendor.ts */ \"./src/main/webapp/app/vendor.ts\");\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\nvar platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ \"./node_modules/@angular/platform-browser/fesm5/platform-browser.js\");\nvar http_1 = __webpack_require__(/*! @angular/common/http */ \"./node_modules/@angular/common/fesm5/http.js\");\nvar http_2 = __webpack_require__(/*! @angular/common/http */ \"./node_modules/@angular/common/fesm5/http.js\");\nvar ngx_webstorage_1 = __webpack_require__(/*! ngx-webstorage */ \"./node_modules/ngx-webstorage/dist/app.js\");\nvar ng_jhipster_1 = __webpack_require__(/*! ng-jhipster */ \"./node_modules/ng-jhipster/index.js\");\nvar auth_interceptor_1 = __webpack_require__(/*! ./blocks/interceptor/auth.interceptor */ \"./src/main/webapp/app/blocks/interceptor/auth.interceptor.ts\");\nvar auth_expired_interceptor_1 = __webpack_require__(/*! ./blocks/interceptor/auth-expired.interceptor */ \"./src/main/webapp/app/blocks/interceptor/auth-expired.interceptor.ts\");\nvar errorhandler_interceptor_1 = __webpack_require__(/*! ./blocks/interceptor/errorhandler.interceptor */ \"./src/main/webapp/app/blocks/interceptor/errorhandler.interceptor.ts\");\nvar notification_interceptor_1 = __webpack_require__(/*! ./blocks/interceptor/notification.interceptor */ \"./src/main/webapp/app/blocks/interceptor/notification.interceptor.ts\");\nvar shared_1 = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\nvar core_2 = __webpack_require__(/*! app/core */ \"./src/main/webapp/app/core/index.ts\");\nvar app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ \"./src/main/webapp/app/app-routing.module.ts\");\nvar home_module_1 = __webpack_require__(/*! ./home/home.module */ \"./src/main/webapp/app/home/home.module.ts\");\nvar account_module_1 = __webpack_require__(/*! ./account/account.module */ \"./src/main/webapp/app/account/account.module.ts\");\nvar entity_module_1 = __webpack_require__(/*! ./entities/entity.module */ \"./src/main/webapp/app/entities/entity.module.ts\");\n// import { RankingModule } from \"./ranking/ranking.module\";\n// jhipster-needle-angular-add-module-import JHipster will add new module here\nvar layouts_1 = __webpack_require__(/*! ./layouts */ \"./src/main/webapp/app/layouts/index.ts\");\nvar JiuzhangquanzhankeAppModule = /** @class */ (function () {\n    function JiuzhangquanzhankeAppModule() {\n    }\n    JiuzhangquanzhankeAppModule = tslib_1.__decorate([\n        core_1.NgModule({\n            imports: [\n                platform_browser_1.BrowserModule,\n                app_routing_module_1.JiuzhangquanzhankeAppRoutingModule,\n                ngx_webstorage_1.Ng2Webstorage.forRoot({ prefix: \"jhi\", separator: \"-\" }),\n                shared_1.JiuzhangquanzhankeSharedModule,\n                core_2.JiuzhangquanzhankeCoreModule,\n                home_module_1.JiuzhangquanzhankeHomeModule,\n                account_module_1.JiuzhangquanzhankeAccountModule,\n                entity_module_1.JiuzhangquanzhankeEntityModule,\n                http_1.HttpClientModule,\n            ],\n            declarations: [\n                layouts_1.JhiMainComponent,\n                layouts_1.NavbarComponent,\n                layouts_1.ErrorComponent,\n                layouts_1.PageRibbonComponent,\n                layouts_1.FooterComponent,\n                RankingComponent\n            ],\n            providers: [\n                {\n                    provide: http_2.HTTP_INTERCEPTORS,\n                    useClass: auth_interceptor_1.AuthInterceptor,\n                    multi: true,\n                    deps: [ngx_webstorage_1.LocalStorageService, ngx_webstorage_1.SessionStorageService]\n                },\n                {\n                    provide: http_2.HTTP_INTERCEPTORS,\n                    useClass: auth_expired_interceptor_1.AuthExpiredInterceptor,\n                    multi: true,\n                    deps: [core_1.Injector]\n                },\n                {\n                    provide: http_2.HTTP_INTERCEPTORS,\n                    useClass: errorhandler_interceptor_1.ErrorHandlerInterceptor,\n                    multi: true,\n                    deps: [ng_jhipster_1.JhiEventManager]\n                },\n                {\n                    provide: http_2.HTTP_INTERCEPTORS,\n                    useClass: notification_interceptor_1.NotificationInterceptor,\n                    multi: true,\n                    deps: [core_1.Injector]\n                }\n            ],\n            bootstrap: [layouts_1.JhiMainComponent]\n        })\n    ], JiuzhangquanzhankeAppModule);\n    return JiuzhangquanzhankeAppModule;\n}());\nexports.JiuzhangquanzhankeAppModule = JiuzhangquanzhankeAppModule;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5tb2R1bGUudHM/YzVmOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwRUFBcUI7QUFFckIsb0dBQW1EO0FBQ25ELG9KQUEwRDtBQUMxRCw2R0FBd0Q7QUFDeEQsNkdBQXlEO0FBQ3pELDhHQUl3QjtBQUN4QixrR0FBOEM7QUFDOUMsMEpBQXdFO0FBQ3hFLGtMQUF1RjtBQUN2RixrTEFBd0Y7QUFDeEYsa0xBQXdGO0FBQ3hGLDhGQUE0RDtBQUM1RCx3RkFBd0Q7QUFDeEQsMEhBQTBFO0FBQzFFLCtHQUFrRTtBQUNsRSw4SEFBMkU7QUFDM0UsNkhBQTBFO0FBQzFFLDREQUE0RDtBQUU1RCw4RUFBOEU7QUFDOUUsK0ZBTW1CO0FBb0RuQjtJQUFBO0lBQTBDLENBQUM7SUFBOUIsMkJBQTJCO1FBbER2QyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsZ0NBQWE7Z0JBQ2IsdURBQWtDO2dCQUNsQyw4QkFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUN4RCx1Q0FBOEI7Z0JBQzlCLG1DQUE0QjtnQkFDNUIsMENBQTRCO2dCQUM1QixnREFBK0I7Z0JBQy9CLDhDQUE4QjtnQkFDOUIsdUJBQWdCO2FBR2pCO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLDBCQUFnQjtnQkFDaEIseUJBQWU7Z0JBQ2Ysd0JBQWM7Z0JBQ2QsNkJBQW1CO2dCQUNuQix5QkFBZTtnQkFDZixnQkFBZ0I7YUFDakI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLHdCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLGtDQUFlO29CQUN6QixLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsQ0FBQyxvQ0FBbUIsRUFBRSxzQ0FBcUIsQ0FBQztpQkFDbkQ7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLHdCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLGlEQUFzQjtvQkFDaEMsS0FBSyxFQUFFLElBQUk7b0JBQ1gsSUFBSSxFQUFFLENBQUMsZUFBUSxDQUFDO2lCQUNqQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsd0JBQWlCO29CQUMxQixRQUFRLEVBQUUsa0RBQXVCO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsQ0FBQyw2QkFBZSxDQUFDO2lCQUN4QjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsd0JBQWlCO29CQUMxQixRQUFRLEVBQUUsa0RBQXVCO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsQ0FBQyxlQUFRLENBQUM7aUJBQ2pCO2FBQ0Y7WUFDRCxTQUFTLEVBQUUsQ0FBQywwQkFBZ0IsQ0FBQztTQUM5QixDQUFDO09BQ1csMkJBQTJCLENBQUc7SUFBRCxrQ0FBQztDQUFBO0FBQTlCLGtFQUEyQiIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvYXBwLm1vZHVsZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vdmVuZG9yLnRzXCI7XG5cbmltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge1xuICBOZzJXZWJzdG9yYWdlLFxuICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICBTZXNzaW9uU3RvcmFnZVNlcnZpY2Vcbn0gZnJvbSBcIm5neC13ZWJzdG9yYWdlXCI7XG5pbXBvcnQgeyBKaGlFdmVudE1hbmFnZXIgfSBmcm9tIFwibmctamhpcHN0ZXJcIjtcbmltcG9ydCB7IEF1dGhJbnRlcmNlcHRvciB9IGZyb20gXCIuL2Jsb2Nrcy9pbnRlcmNlcHRvci9hdXRoLmludGVyY2VwdG9yXCI7XG5pbXBvcnQgeyBBdXRoRXhwaXJlZEludGVyY2VwdG9yIH0gZnJvbSBcIi4vYmxvY2tzL2ludGVyY2VwdG9yL2F1dGgtZXhwaXJlZC5pbnRlcmNlcHRvclwiO1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVySW50ZXJjZXB0b3IgfSBmcm9tIFwiLi9ibG9ja3MvaW50ZXJjZXB0b3IvZXJyb3JoYW5kbGVyLmludGVyY2VwdG9yXCI7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25JbnRlcmNlcHRvciB9IGZyb20gXCIuL2Jsb2Nrcy9pbnRlcmNlcHRvci9ub3RpZmljYXRpb24uaW50ZXJjZXB0b3JcIjtcbmltcG9ydCB7IEppdXpoYW5ncXVhbnpoYW5rZVNoYXJlZE1vZHVsZSB9IGZyb20gXCJhcHAvc2hhcmVkXCI7XG5pbXBvcnQgeyBKaXV6aGFuZ3F1YW56aGFua2VDb3JlTW9kdWxlIH0gZnJvbSBcImFwcC9jb3JlXCI7XG5pbXBvcnQgeyBKaXV6aGFuZ3F1YW56aGFua2VBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBKaXV6aGFuZ3F1YW56aGFua2VIb21lTW9kdWxlIH0gZnJvbSBcIi4vaG9tZS9ob21lLm1vZHVsZVwiO1xuaW1wb3J0IHsgSml1emhhbmdxdWFuemhhbmtlQWNjb3VudE1vZHVsZSB9IGZyb20gXCIuL2FjY291bnQvYWNjb3VudC5tb2R1bGVcIjtcbmltcG9ydCB7IEppdXpoYW5ncXVhbnpoYW5rZUVudGl0eU1vZHVsZSB9IGZyb20gXCIuL2VudGl0aWVzL2VudGl0eS5tb2R1bGVcIjtcbi8vIGltcG9ydCB7IFJhbmtpbmdNb2R1bGUgfSBmcm9tIFwiLi9yYW5raW5nL3JhbmtpbmcubW9kdWxlXCI7XG5cbi8vIGpoaXBzdGVyLW5lZWRsZS1hbmd1bGFyLWFkZC1tb2R1bGUtaW1wb3J0IEpIaXBzdGVyIHdpbGwgYWRkIG5ldyBtb2R1bGUgaGVyZVxuaW1wb3J0IHtcbiAgSmhpTWFpbkNvbXBvbmVudCxcbiAgTmF2YmFyQ29tcG9uZW50LFxuICBGb290ZXJDb21wb25lbnQsXG4gIFBhZ2VSaWJib25Db21wb25lbnQsXG4gIEVycm9yQ29tcG9uZW50XG59IGZyb20gXCIuL2xheW91dHNcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgSml1emhhbmdxdWFuemhhbmtlQXBwUm91dGluZ01vZHVsZSxcbiAgICBOZzJXZWJzdG9yYWdlLmZvclJvb3QoeyBwcmVmaXg6IFwiamhpXCIsIHNlcGFyYXRvcjogXCItXCIgfSksXG4gICAgSml1emhhbmdxdWFuemhhbmtlU2hhcmVkTW9kdWxlLFxuICAgIEppdXpoYW5ncXVhbnpoYW5rZUNvcmVNb2R1bGUsXG4gICAgSml1emhhbmdxdWFuemhhbmtlSG9tZU1vZHVsZSxcbiAgICBKaXV6aGFuZ3F1YW56aGFua2VBY2NvdW50TW9kdWxlLFxuICAgIEppdXpoYW5ncXVhbnpoYW5rZUVudGl0eU1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIC8vIFJhbmtpbmdNb2R1bGVcbiAgICAvLyBqaGlwc3Rlci1uZWVkbGUtYW5ndWxhci1hZGQtbW9kdWxlIEpIaXBzdGVyIHdpbGwgYWRkIG5ldyBtb2R1bGUgaGVyZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBKaGlNYWluQ29tcG9uZW50LFxuICAgIE5hdmJhckNvbXBvbmVudCxcbiAgICBFcnJvckNvbXBvbmVudCxcbiAgICBQYWdlUmliYm9uQ29tcG9uZW50LFxuICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICBSYW5raW5nQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IEF1dGhJbnRlcmNlcHRvcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgZGVwczogW0xvY2FsU3RvcmFnZVNlcnZpY2UsIFNlc3Npb25TdG9yYWdlU2VydmljZV1cbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IEF1dGhFeHBpcmVkSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIGRlcHM6IFtJbmplY3Rvcl1cbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IEVycm9ySGFuZGxlckludGVyY2VwdG9yLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICBkZXBzOiBbSmhpRXZlbnRNYW5hZ2VyXVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogTm90aWZpY2F0aW9uSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIGRlcHM6IFtJbmplY3Rvcl1cbiAgICB9XG4gIF0sXG4gIGJvb3RzdHJhcDogW0poaU1haW5Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEppdXpoYW5ncXVhbnpoYW5rZUFwcE1vZHVsZSB7fVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/app.module.ts\n");

/***/ })

})