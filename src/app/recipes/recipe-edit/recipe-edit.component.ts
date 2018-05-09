import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editModecheck = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,private recipeSvc: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editModecheck = params['id'] != null;
        this.initForm();
      }
    )
  }
  private initForm() {
    let recipeName ='';
    let recipeImagePath = '';
    let recipeDescription ='';
    let recipeIngredients = new FormArray([]);
    
    if (this.editModecheck) {
      const recipe: Recipe = this.recipeSvc.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImagePath=recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingred of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingred.name),
              'amount': new FormControl(ingred.amount)
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    });
  }

  onSubmit(){
    console.log(this.recipeForm);
  }
}
