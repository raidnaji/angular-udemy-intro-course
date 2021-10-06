import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

import { Recipe } from "./recipe.model";

@Injectable({providedIn: 'root' })



export class RecipeService {
    // recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.simplyrecipes.com/thmb/OCi18J2V8OeKDFV3FxoeKvgq74E=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-horiz-a-1600-7c8292daa98e4020b447f0dc97a45cb7.jpg', [
      new Ingredient('Meat', 1),
      new Ingredient('French fries', 20)
    ]),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://www.simplyrecipes.com/thmb/OCi18J2V8OeKDFV3FxoeKvgq74E=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-horiz-a-1600-7c8292daa98e4020b447f0dc97a45cb7.jpg', [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ])
  ] ;

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
      return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}