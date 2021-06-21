import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import React, { Container, Row, Col, Component, useState } from "react";

export default function AddRestaurant(props) {
  const history = useHistory();
  var restaurants = history.location.state.restaurants;
  console.log(restaurants);
  const [name, setName] = useState("");
  const [address, setAddress] = useState([]);
  const [phone, setPhone] = useState([]);

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const onPhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = () => {
    restaurants.push({
      name: name,
      address: address,
      phone: phone,
    });
    console.log(restaurants);
    history.push("/userProfile");
  };

  return (
    <React.Fragment>
      <h1>Add Restaurant</h1>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" onChange={onNameChange} />
        <br />

        <label>Address: </label>
        <input type="textarea" onChange={onAddressChange} />
        <br />

        <label>Phone: </label>
        <input type="text" onChange={onPhoneChange} />
        <br />
        <Button type="submit">Save</Button>
      </form>
    </React.Fragment>
  );
}
