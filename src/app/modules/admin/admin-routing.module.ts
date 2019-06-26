import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../../shared/components/errors/not-found/not-found.component';
import { InternalErrorComponent } from '../../shared/components/errors/internal-error/internal-error.component';
import { AdminComponent } from './admin.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
    { path: 'admin', component: AdminComponent
    , children: [
        { path: 'welcome', component: WelcomeComponent },
        // { path: 'about-us', component: AboutUsComponent },
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
export class AdminRoutingModule { }
