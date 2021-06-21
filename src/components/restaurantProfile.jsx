import React, { Component } from "react";
import RESTAURANT_MENU_ITEMS from "../database/restaurantMenuItems";
import { Container, Col, Row, Button } from "react-bootstrap";

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
        <h1>Demo Restaurant</h1>
        <Button
          onClick={() =>
            this.props.history.push({
              pathname: "/addRestDetails",
              state: { details: this.state.details },
            })
          }
        >
          Add Details
        </Button>
        <Button
          onClick={() =>
            this.props.history.push({
              pathname: "/addMenuItem",
              state: { menuItems: this.state.menuItems },
            })
          }
        >
          Add Menu Item
        </Button>
        <h3>Menu Items</h3>
        {this.state.menuItems.map((item, id) => {
          return (
            <Container>
              <Row>
                <span>
                  Menu Item: {item.name} &nbsp;&nbsp;&nbsp; Price: {item.price}
                </span>
              </Row>
              <Row>
                <span>Ingredients: {item.ingredients}</span>
                {/* <ul style={{ listStyle: "none" }}>
                  {item.ingredients.map((ingredient) => (
                    <li>{ingredient}, </li>
                  ))}
                </ul> */}
              </Row>
            </Container>
          );
        })}
        {this.state.details.length === 0 ? null : (
          <React.Fragment>
            <h3>Restaurant Details</h3>
            <p>
              Address:{" "}
              {this.state.details[this.state.details.length - 1].address}
            </p>
            <p>
              Phone No:{" "}
              {this.state.details[this.state.details.length - 1].phoneNo}
            </p>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
