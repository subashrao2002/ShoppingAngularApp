import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
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
    
    if (this.editModecheck) {
      const recipe: Recipe = this.recipeSvc.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImagePath=recipe.imagePath;
      recipeDescription = recipe.description;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription)
    });
  }

  onSubmit(){
    console.log(this.recipeForm);
  }
}
