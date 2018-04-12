import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pan Cake','delicious round baked bread','https://assets.marthastewart.com/styles/video-preview-1280x720-highdpi/d31/easy_mothers_day_pancake_recipe/easy_mothers_day_pancake_recipe_horiz.jpg?itok=90ij5KGf')
  ];

  constructor() { }

  ngOnInit() {
  }

}
