import "./vendor.ts";

import { NgModule, Injector } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import {
  Ng2Webstorage,
  LocalStorageService,
  SessionStorageService
} from "ngx-webstorage";
import { JhiEventManager } from "ng-jhipster";
import { AuthInterceptor } from "./blocks/interceptor/auth.interceptor";
import { AuthExpiredInterceptor } from "./blocks/interceptor/auth-expired.interceptor";
import { ErrorHandlerInterceptor } from "./blocks/interceptor/errorhandler.interceptor";
import { NotificationInterceptor } from "./blocks/interceptor/notification.interceptor";
import { JiuzhangquanzhankeSharedModule } from "app/shared";
import { JiuzhangquanzhankeCoreModule } from "app/core";
import { JiuzhangquanzhankeAppRoutingModule } from "./app-routing.module";
import { JiuzhangquanzhankeHomeModule } from "./home/home.module";
import { JiuzhangquanzhankeAccountModule } from "./account/account.module";
import { JiuzhangquanzhankeEntityModule } from "./entities/entity.module";

// jhipster-needle-angular-add-module-import JHipster will add new module here
import {
  JhiMainComponent,
  NavbarComponent,
  FooterComponent,
  PageRibbonComponent,
  ErrorComponent
} from "./layouts";
import { RankingComponent } from "./ranking/ranking.component";

@NgModule({
  imports: [
    BrowserModule,
    JiuzhangquanzhankeAppRoutingModule,
    Ng2Webstorage.forRoot({ prefix: "jhi", separator: "-" }),
    JiuzhangquanzhankeSharedModule,
    JiuzhangquanzhankeCoreModule,
    JiuzhangquanzhankeHomeModule,
    JiuzhangquanzhankeAccountModule,
    JiuzhangquanzhankeEntityModule,
    HttpClientModule
    // RankingModule
    // jhipster-needle-angular-add-module JHipster will add new module here
  ],
  declarations: [
    JhiMainComponent,
    NavbarComponent,
    ErrorComponent,
    PageRibbonComponent,
    FooterComponent,
    RankingComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      deps: [LocalStorageService, SessionStorageService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true,
      deps: [Injector]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
      deps: [JhiEventManager]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true,
      deps: [Injector]
    }
  ],
  bootstrap: [JhiMainComponent]
})
export class JiuzhangquanzhankeAppModule {}
