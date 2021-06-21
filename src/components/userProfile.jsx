import React, { Component } from "react";
import USER_RECIPES from "../database/userRecipes";
import RESTAURANTS_BY_USER from "../database/restaurantsByUser";
import { Container, Col, Row, Button } from "react-bootstrap";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      restaurants: [],
    };
  }

  componentDidMount() {
    this.setState({
      recipes: USER_RECIPES,
      restaurants: RESTAURANTS_BY_USER,
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
        <Container>
          <Row>
            <Col>
              <h3>Restaurants by User</h3>
            </Col>
            <Col>
              <Button
                onClick={() =>
                  this.props.history.push({
                    pathname: "/addRestaurant",
                    state: { restaurants: this.state.restaurants },
                  })
                }
              >
                Add Restaurant
              </Button>
            </Col>
          </Row>
        </Container>
        {this.state.restaurants.map((restaurant, id) => {
          return (
            <Container>
              <Row
              // onClick={() => {
              //   this.props.history.push({
              //     pathname: "/recipeView",
              //     state: { id: id },
              //   });
              // }}
              >
                <span>Restaurant Name: {restaurant.name}</span>
              </Row>
            </Container>
          );
        })}
      </React.Fragment>
    );
  }
}
