import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/errors/not-found/not-found.component';
import { InternalErrorComponent } from './shared/components/errors/internal-error/internal-error.component';
import { SiteComponent } from './modules/site/site.component';

const routes: Routes = [
  // { path: '', redirectTo: 'site', pathMatch: 'full' },
  // { path: 'site', children: [
  //  { path: '', redirectTo: 'site', pathMatch: 'full' },
  // { path: 'site', loadChildren: () => import('./modules/site/site.module').then(m => m.SiteModule) },
  // { path: 'site', loadChildren: './modules/site/site.module#SiteModule' },
  // ] },
  // { path: '500', component: InternalErrorComponent },
  // { path: 'site', loadChildren: './modules/site/site.module#SiteModule' },
  // { path: '404', component: NotFoundComponent },
  // { path: '**', redirectTo: '/404' },


  // {
  //   path: 'site',
  //   loadChildren: () => import('./modules/site/site.module').then(mod => mod.SiteModule)
  // },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./modules/admin/admin.module').then(mod => mod.AdminModule)
  // },
  // { path: '404', component: NotFoundComponent },
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // }
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
