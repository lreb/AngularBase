import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/components/errors/not-found/not-found.component';
import { InternalErrorComponent } from './shared/components/errors/internal-error/internal-error.component';
import { SiteComponent } from './modules/site/site.component';
import { SiteModule } from './modules/site/site.module';
import { AdminComponent } from './modules/admin/admin.component';
import { SideBarComponent } from './modules/admin/side-bar/side-bar.component';
import { SideBarModule } from './modules/admin/side-bar/side-bar.module';
import { AdminModule } from './modules/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    // AdminComponent,
    // NotFoundComponent,
    // InternalErrorComponent
    // SiteComponent,
  ],
  imports: [
    BrowserModule,
    SiteModule,
    SideBarModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
