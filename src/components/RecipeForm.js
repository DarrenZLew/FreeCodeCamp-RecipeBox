import React from 'react';

const RecipeForm = props => {
	let recipe = {};
	let edit = {
		name: '',
		ingredients: '',
		id: ''
	}
	if (props.isEditing) {
		edit.name = props.editRecipe[0].name;
		edit.ingredients = props.editRecipe[0].ingredients; 
		edit.id = props.editRecipe[0].id;
	}

	return (
		<form>
			<h4>Recipe</h4>
			<input type="text" placeholder="Recipe name goes here" defaultValue={edit.name} ref={(input) => {
				recipe.name = input;
			}} />
			<h4>Ingredient</h4>
			<textarea placeholder="Provide ingredients separated by ','" defaultValue={edit.ingredients} ref={(input) => {
				recipe.ingredients = input;
			}} />
			<button onClick={(event) => {
				event.preventDefault();
				props.handleAdd(recipe, edit.id);
				recipe.name.value = '';
				recipe.ingredients.value = '';
			}} > 
				Save 
			</button>
			<button onClick={(event) => {
				event.preventDefault();
				props.cancel();
			}}>
				Cancel
			</button>
		</form>
	)
}

export default RecipeForm;