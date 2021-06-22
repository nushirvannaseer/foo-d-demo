import React, { Component } from "react";
import USER_RECIPES from "../database/userRecipes";
import { Container, Col, Row } from "react-bootstrap";

class RecipeView extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.location.state.id;
    this.recipe = USER_RECIPES[this.id];
  }
  render() {
    return (
      <React.Fragment>
        <h1>Recipe Details</h1>
        <Container>
          <Row>
            <span>Recipe Name: {this.recipe.name}</span>
          </Row>
          <Row>
            <span>Steps: {this.recipe.steps} </span>
            {/* <ol>
              {this.recipe.steps.map((step) => (
                <li>{step} </li>
              ))}
            </ol> */}
          </Row>
          <Row>
            <span>Tags: {this.recipe.tags}</span>
            {/* <ul style={{ listStyle: "none" }}>
              {this.recipe.tags.map((tag) => (
                <li>#{tag}, </li>
              ))}
            </ul> */}
          </Row>
          <Row>
            <span>Recipe by: {this.recipe.addedBy}</span>
            {/* <ul style={{ listStyle: "none" }}>
              {this.recipe.tags.map((tag) => (
                <li>#{tag}, </li>
              ))}
            </ul> */}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default RecipeView;
