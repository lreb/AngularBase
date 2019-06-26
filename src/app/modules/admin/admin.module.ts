import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarModule } from './side-bar/side-bar.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    SideBarModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, WelcomeComponent]
})
export class AdminModule { }
