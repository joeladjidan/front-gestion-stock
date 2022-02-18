import {NgModule} from '@angular/core';
import {RouterModule, Routes,} from '@angular/router';

import {NouveauCltFrsComponent,} from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import {NouvelArticleComponent,} from './pages/articles/nouvel-article/nouvel-article.component';
import {PageArticleComponent,} from './pages/articles/page-article/page-article.component';
import {PageClientComponent,} from './pages/client/page-client/page-client.component';
import {PageMvtstkComponent,} from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import {PageDashboardComponent,} from './pages/page-dashboard/page-dashboard.component';
import {PageInscriptionComponent,} from './pages/page-inscription/page-inscription.component';
import {PageLoginComponent} from './pages/page-login/page-login.component';
import {PageStatistiquesComponent,} from './pages/page-statistiques/page-statistiques.component';
import {ApplicationGuardService,} from './services/guard/application-guard.service';
import {PageUtilisateursComponent} from "./pages/page-utilisateurs/page-utilisateurs.component";
import {PageCategoriesComponent} from "./pages/page-categories/page-categories.component";
import {PageFournisseursComponent} from "./pages/page-fournisseurs/page-fournisseurs.component";

const routes: Routes = [
  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path: 'inscrire',
    component: PageInscriptionComponent
  },
  {
    path: '',
    canActivate: [ApplicationGuardService],
    component: PageDashboardComponent,
    children: [
      {
        path: 'statistiques',
        component: PageStatistiquesComponent
      },
      {
        path: 'articles',
        component: PageArticleComponent
      },
      {
        path: 'mvtstk',
        component: PageMvtstkComponent
      },
      {
        path: 'nouvelarticle',
        component: NouvelArticleComponent
      },
      {
        path: 'clients',
        component: PageClientComponent
      },
      {
        path: 'categories',
        component: PageCategoriesComponent
      },
      {
        path: 'utilisateurs',
        component: PageUtilisateursComponent
      },
      {
        path: 'fournisseurs',
        component: PageFournisseursComponent
      },
      {
        path: 'nouveauclient',
        component: NouveauCltFrsComponent,
        data: {
          origin: 'client'
        }
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


