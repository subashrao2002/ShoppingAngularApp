import { NgModule } from "@angular/core";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DropdownDirective } from "../shared/dropdown.directive";
import { CommonModule } from "@angular/common";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared.module";
import { AuthModule } from "../auth/auth.module";

@NgModule({
    declarations:[
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeItemComponent,
        RecipeListComponent,
        RecipeStartComponent,
        RecipesComponent
    ],
    imports:[
        ReactiveFormsModule,
        CommonModule,
        RecipesRoutingModule,
        SharedModule
    ]
})
export class RecipesModule{

}