import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  BouttonActionComponent,
} from './composants/boutton-action/boutton-action.component';
import {
  DetailArticleComponent,
} from './composants/detail-article/detail-article.component';
import {
  DetailCltFrsComponent,
} from './composants/detail-clt-frs/detail-clt-frs.component';
import { HeaderComponent } from './composants/header/header.component';
import { LoaderComponent } from './composants/loader/loader.component';
import { MenuComponent } from './composants/menu/menu/menu.component';
import {
  PaginationComponent,
} from './composants/pagination/pagination.component';
import {
  NouvelArticleComponent,
} from './pages/articles/nouvel-article/nouvel-article.component';
import {
  PageArticleComponent,
} from './pages/articles/page-article/page-article.component';
import {
  PageClientComponent,
} from './pages/client/page-client/page-client.component';
import {
  DetailMvtStkArticleComponent,
} from './pages/mvtstk/detail-mvt-stk-article/detail-mvt-stk-article.component';
import {
  DetailMvtStkComponent,
} from './pages/mvtstk/detail-mvt-stk/detail-mvt-stk.component';
import {
  PageMvtstkComponent,
} from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import {
  PageDashboardComponent,
} from './pages/page-dashboard/page-dashboard.component';
import {
  PageInscriptionComponent,
} from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import {
  PageStatistiquesComponent,
} from './pages/page-statistiques/page-statistiques.component';
import {
  HttpInterceptorService,
} from './services/interceptor/http-interceptor.service';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BouttonActionComponent,
    LoaderComponent,
    NouvelArticleComponent,
    PageMvtstkComponent,
    DetailMvtStkArticleComponent,
    DetailMvtStkComponent,
    DetailCltFrsComponent,
    PageClientComponent,
    NouveauCltFrsComponent
  ],
imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule
],
providers: [{
  provide: HTTP_INTERCEPTORS,
  useClass: HttpInterceptorService,
  multi: true
}],
bootstrap: [AppComponent]
})
export class AppModule { }
