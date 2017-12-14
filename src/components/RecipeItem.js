import React from 'react';

const RecipeItem = props => {
	return (
		<li>
			{props.name} - {props.ingredients}
			<button onClick={() => {
				props.editRecipe(props.id);
			}} >
				Edit Recipe
			</button>
			<button onClick={() => {
				props.removeRecipe(props.id);
			}} >
				Delete Recipe
			</button>
		</li>
	)
}

export default RecipeItem;