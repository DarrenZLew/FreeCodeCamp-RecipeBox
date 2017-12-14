import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = props => {
	let RecipeItems;
	RecipeItems = props.recipes.map(recipe => {
		return (
			<RecipeItem key={recipe.id} id={recipe.id} name={recipe.name} ingredients={recipe.ingredients} removeRecipe={props.removeRecipe} editRecipe={props.editRecipe} />
		)
	});
	return (
		<div>
			<ul>
				{RecipeItems}
			</ul>
		</div>
	)
}

export default RecipeList;