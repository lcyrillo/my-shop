import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./navigation/home/home.component";

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent }
];

@NgModule({
    imports:[
        RouterModule.forRoot(rootRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}