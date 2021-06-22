import React, { Component } from "react";
import RESTAURANT_MENU_ITEMS from "../database/restaurantMenuItems";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./userProfile.css";

let detArr = [];

export default class RestaurantProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [],
            details: detArr,
        };
    }

    componentDidMount() {
        this.setState({
            menuItems: RESTAURANT_MENU_ITEMS,
        });
    }

    render() {
        console.log("details", this.state.details);
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
                    <h1>Demo Restaurant</h1>
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
                    <h2 style={{ marginBottom: "30px" }}>Menu Items</h2>
                    {this.state.menuItems.map((item, id) => {
                        return (
                            <Container
                                style={{
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                }}
                            >
                                <Row>
                                    <span>
                                        Menu Item: {item.name}{" "}
                                        &nbsp;&nbsp;&nbsp; Price: {item.price}
                                    </span>
                                </Row>
                                <Row>
                                    <span>Ingredients: {item.ingredients}</span>
                                </Row>
                            </Container>
                        );
                    })}
                    <Col>
                        <Button
                            className="clickable"
                            style={{
                                borderRadius: "50px",
                                borderStyle: "solid",
                                marginTop: "40px",
                                marginBottom: "10px",
                            }}
                            onClick={() =>
                                this.props.history.push({
                                    pathname: "/addMenuItem",
                                    state: { menuItems: this.state.menuItems },
                                })
                            }
                        >
                            Add Menu Item
                        </Button>
                    </Col>
                </div>
                <div style={{
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
                    }}>
                    <h2 style={{ marginBottom: "30px" }}>Restaurant Details</h2>
                    {this.state.details.length === 0 ? null : (
                        <React.Fragment>
                            <p>
                                Address:{" "}
                                {
                                    this.state.details[
                                        this.state.details.length - 1
                                    ].address
                                }
                            </p>
                            <p>
                                Phone No:{" "}
                                {
                                    this.state.details[
                                        this.state.details.length - 1
                                    ].phoneNo
                                }
                            </p>
                        </React.Fragment>
                    )}
                    <Col>
                        <Button
                            className="clickable"
                            style={{
                                borderRadius: "50px",
                                borderStyle: "solid",
                                marginTop: "40px",
                                marginBottom: "10px",
                            }}
                            onClick={() =>
                                this.props.history.push({
                                    pathname: "/addRestDetails",
                                    state: { details: this.state.details },
                                })
                            }
                        >
                            Add Details
                        </Button>
                    </Col>
                </div>
                <Button className='clickable' style={{
                                borderRadius: "50px",
                                borderStyle: "solid",
                                marginTop: "15px",
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
