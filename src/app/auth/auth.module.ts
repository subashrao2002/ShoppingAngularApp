import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";

const appRoutes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
];

@NgModule({
    declarations:[
        SigninComponent,
        SignupComponent
    ],
    imports:[
        FormsModule,
        [RouterModule.forChild(appRoutes)],
        AppRoutingModule
    ],
    exports: [RouterModule]
})
export class AuthModule{}