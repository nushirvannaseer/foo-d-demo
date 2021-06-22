import React, { Component } from "react";
import USER_RECIPES from "../database/userRecipes";
import RESTAURANTS_BY_USER from "../database/restaurantsByUser";
import { Container, Col, Row, Button } from "react-bootstrap";
import './userProfile.css'

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
                <div
                    style={{
                        borderWidth: "2px",
                        borderStyle: "solid",
                        width: "80vw",
                        height: "70px",
                        borderRadius: "50px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "30px",
                    }}
                >
                    <h1>Demo User</h1>
                </div>
                <div
                    style={{
                        borderWidth: "2px",
                        borderStyle: "solid",
                        width: "fit-content",
                        height: "fit-content",
                        borderRadius: "50px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "30px",
                        padding: "50px",
                    }}
                >
                    <h2 style={{ marginBottom: "30px" }}>Recipes by User</h2>
                    {this.state.recipes.map((recipe, id) => {
                        return (
                            <Container>
                                <Row
                                    style={{
                                        marginTop: "10px",
                                        marginBottom: "10px",
                                    }}
                                    onClick={() => {
                                        this.props.history.push({
                                            pathname: "/recipeView",
                                            state: { id: id },
                                        });
                                    }}
                                >
                                    <span className='clickable'>Recipe Name: {recipe.name}</span>
                                </Row>
                            </Container>
                        );
                    })}
                    <Col>
                        <Button className='clickable'
                            style={{
                                borderRadius: "50px",
                                borderStyle: "solid",
                                marginTop: "40px",
                                marginBottom: "10px",
                            }}
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
                </div>

                <div
                    style={{
                        borderWidth: "2px",
                        borderStyle: "solid",
                        width: "fit-content",
                        height: "fit-content",
                        borderRadius: "50px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "30px",
                        padding: "50px",
                    }}
                >
                    <h2 style={{ marginBottom: "30px" }}>
                        Restaurants by User
                    </h2>
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
                                    <span className='clickable'>
                                        Restaurant Name: {restaurant.name}
                                    </span>
                                </Row>
                            </Container>
                        );
                    })}
                    <Col>
                        <Button className='clickable' style={{
                                borderRadius: "50px",
                                borderStyle: "solid",
                                marginTop: "40px",
                                marginBottom: "10px",
                            }}
                            onClick={() =>
                                this.props.history.push({
                                    pathname: "/addRestaurant",
                                    state: {
                                        restaurants: this.state.restaurants,
                                    },
                                })
                            }
                        >
                            Add Restaurant
                        </Button>
                    </Col>
                </div>
                <Button className='clickable' style={{
                                borderRadius: "50px",
                                borderStyle: "solid",
                                marginTop: "40px",
                                marginBottom: "10px",
                            }}
                            onClick={() =>{
                                this.props.history.push('/')
                            }
                                
                            }
                        >
                            Go to Home
                        </Button>
            </React.Fragment>
        );
    }
}
