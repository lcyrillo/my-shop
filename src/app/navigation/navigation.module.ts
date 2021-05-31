import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MenuByCategoryComponent } from './menu-by-category/menu-by-category.component';


@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent,
    MenuByCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    MenuByCategoryComponent,
    HomeComponent
  ]
})
export class NavigationModule { }
