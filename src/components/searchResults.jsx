import { elementRoles } from "aria-query";
import React, { Component } from "react";
import RESTAURANT_MENU_ITEMS from "../database/restaurantMenuItems";
import USER_RECIPES from "../database/userRecipes";

export default function SearchResults(props) {
  //find restaurants and users with same name and put them in two separate objects
  const { restaurantMenuItems, userRecipes, searchQuery } = props;
  let menuResults = [];
  let recipeResults = [];

  restaurantMenuItems.forEach((element) => {
    if (element.name.includes(searchQuery)) menuResults.push(element);
  });

  userRecipes.forEach((element) => {
    if (element.name.includes(searchQuery)) recipeResults.push(element);
  });

  return (
    <React.Fragment>
      <h3>Restaurant Results</h3>
      {menuResults.map((res) => {
        <p> {res.name}</p>;
      })}
      <br />
      <h3>Recipe Results</h3>
      {recipeResults.map((res) => {
        <p>{res.name}</p>;
      })}
    </React.Fragment>
  );
}
