import * as model from './model.js';
import recipeView from './views/recipeView.js';
// import icons from '../img/icons.svg'; // parcel 1
import icons from 'url:../img/icons.svg'; // parcel 2
// console.log(icons); // test
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    const { recipe } = model.state;
    console.log(model.state);
    recipeView.render(recipe);
    // same as: const recipeView = new recipeView(model.state.recipe);
  } catch (err) {
    console.error(`${err}`);
  }
};
controlRecipes();

/*
  window.addEventListener('hashchange', controlRecipes);
  window.addEventListener('load', controlRecipes);
 //simplify to below
*/
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
