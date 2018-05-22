import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { AuthInterCeptor } from './shared/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //  HttpModule, replaced with http client 
    HttpClientModule,
    // RecipesModule, not loaded here and lazy loaded
    SharedModule,
    ShoppingListModule,
    FormsModule,
    AuthModule
  ],
  providers: [ShoppingListService,RecipeService,DataStorageService,AuthService,AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterCeptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
