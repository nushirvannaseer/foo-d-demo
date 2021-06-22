import { Button } from "react-bootstrap";
import recipes from "../database/userRecipes";
import restaurants from "../database/listOfRestaurants";
import React, { Component } from "react";
import { useHistory } from "react-router";

function SearchKey(props) {
  const history = useHistory();
  const clickOnRecipe = (rec) => {
    var index = recipes.indexOf(rec);

    history.push({
      pathname: "/recipeView",
      state: { id: index },
    });
  };
  console.log(props);
  console.log("Key", props.props);
  return (
    <div>
      <div>
        <h2>Recipes</h2>
        {console.log(props.props)}
        {recipes
          .filter((rec) => {
            if (rec == "") {
              return rec;
            } else if (
              props.props &&
              rec.name.toLowerCase().includes(props.props.toLowerCase())
            ) {
              return rec;
            }
          })
          .map((rec) => {
            return (
              <div
                onClick={() => {
                  clickOnRecipe(rec);
                }}
              >
                <b>
                  <h5>{rec.name}</h5>
                </b>
                <p>{rec.steps}</p>
                <b>
                  <p>{rec.tags}</p>
                </b>
              </div>
            );
          })}
      </div>
      <div>
        <h2>Restaurants</h2>
        {restaurants
          .filter((res) => {
            if (res == "") {
              return res;
            } else if (
              props.props &&
              res.name.toLowerCase().includes(props.props.toLowerCase())
            ) {
              return res;
            }
          })
          .map((res) => {
            return (
              <div>
                <b>
                  <h5>{res.name}</h5>
                </b>
                <p>{res.address}</p>
                <b>
                  <p>{res.phone}</p>
                </b>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SearchKey;
