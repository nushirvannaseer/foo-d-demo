import React, { Component } from "react";
import RESTAURANT_MENU_ITEMS from "../database/restaurantMenuItems";
import { Container, Col, Row } from "react-bootstrap";

export default class RestaurantProfile extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Demo Restaurant</h1>
        <h3>Menu Items</h3>
        {RESTAURANT_MENU_ITEMS.map((item, id) => {
          return (
            <Container>
              <Row>
                <span>
                  Menu Item: {item.name} &nbsp;&nbsp;&nbsp; Price: {item.price}
                </span>
              </Row>
              <Row>
                <span>Ingredients:</span>
                <ul style={{ listStyle: "none" }}>
                  {item.ingredients.map((ingredient) => (
                    <li>{ingredient}, </li>
                  ))}
                </ul>
              </Row>
            </Container>
          );
        })}
      </React.Fragment>
    );
  }
}
