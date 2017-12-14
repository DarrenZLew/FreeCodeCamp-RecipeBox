import React from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import Title from './components/Title';
window.id = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isAdding: false,
      isEditing: false,
      editData: []
    }
  }

  toggleAdd() {
    this.setState({isAdding: !this.state.isAdding});
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing});
  }

  handleCancel() {
    if (this.state.isAdding) {
      this.toggleAdd();
    } else {
      this.toggleEdit();
    } 
  }

  handleAdd(val, editId) {
    if (this.state.isEditing) {
      const recipe = {name: val.name.value, ingredients: val.ingredients.value, id: editId}
      const recipes = this.state.data;
      recipes[editId] = recipe;
      this.setState({
        data: recipes,
        editData: [],
        isEditing: !this.state.isEditing
      });
    } else {
      const recipe = {name: val.name.value, ingredients: val.ingredients.value, id: window.id++}
      const recipes = this.state.data;
      recipes.push(recipe);
      this.setState({data: recipes});
      this.toggleAdd();
    }
  }

  handleRemove(id) {
    const recipes = this.state.data;
    const remainingRecipes = recipes.filter((recipe) => {
      if (recipe.id !== id) {
        return recipe
      } else {
        return false
      }
    });
    this.setState({data: remainingRecipes});
  }

  handleEdit(id) {
    const recipes = this.state.data;
    const editRecipe = recipes.filter((recipe) => {
      if (recipe.id === id) {
        return recipe
      } else {
        return false
      }
    });    
    this.setState({
      editData: editRecipe,
      isEditing: !this.state.isEditing
    });
  }

  render() {
    if (this.state.isAdding || this.state.isEditing) {
      return (
        <div>
          <Title />
          <RecipeForm editRecipe={this.state.editData} isEditing={this.state.isEditing} handleAdd={this.handleAdd.bind(this)} cancel={this.handleCancel.bind(this)} />       
        </div>
      )
    }
    return (
      <div>
        <Title />
        <RecipeList recipes={this.state.data} removeRecipe={this.handleRemove.bind(this)} editRecipe={this.handleEdit.bind(this)} />
        <button onClick={this.toggleAdd.bind(this)} >Add New Recipe</button>        
      </div>
    )
  }
}

export default App;
