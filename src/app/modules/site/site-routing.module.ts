import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from '../../shared/components/errors/not-found/not-found.component';
import { InternalErrorComponent } from '../../shared/components/errors/internal-error/internal-error.component';
import { SiteComponent } from './site.component';

const routes: Routes = [
    { path: 'site', component: SiteComponent
    , children: [
        { path: 'home', component: HomeComponent },
        { path: 'about-us', component: AboutUsComponent },
        // { path: '404', component: NotFoundComponent },
        // { path: '500', component: InternalErrorComponent },
        // { path: '**', redirectTo: '/404' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SiteRoutingModule { }
