import React, { Component } from "react";
import USER_RECIPES from "../database/userRecipes";
import { Container, Col, Row } from "react-bootstrap";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Demo User</h1>
        <h3>Recipes by User</h3>
        {USER_RECIPES.map((recipe, id) => {
          return (
            <Container>
              <Row
                onClick={() => {
                  this.props.history.push({
                    pathname: "/recipeView",
                    state: { id: id },
                  });
                }}
              >
                <span>Recipe Name: {recipe.name}</span>
              </Row>
            </Container>
          );
        })}
      </React.Fragment>
    );
  }
}
