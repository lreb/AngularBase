import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './site.component';
import { SiteRoutingModule } from './site-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  imports: [
    CommonModule,
    SiteRoutingModule
  ],
  declarations: [SiteComponent, AboutUsComponent, HomeComponent]
})
export class SiteModule { }
