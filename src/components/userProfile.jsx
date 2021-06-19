import React, { Component } from "react";
import USER_RECIPES from "../database/userRecipes";
import { Container, Col, Row, Button } from "react-bootstrap";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    this.setState({
      recipes: USER_RECIPES,
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Demo User</h1>
        <Container>
          <Row>
            <Col>
              <h3>Recipes by User</h3>
            </Col>
            <Col>
              <Button
                onClick={() =>
                  this.props.history.push({
                    pathname: "/addRecipe",
                    state: { recipes: this.state.recipes },
                  })
                }
              >
                Add Recipe
              </Button>
            </Col>
          </Row>
        </Container>
        {this.state.recipes.map((recipe, id) => {
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
