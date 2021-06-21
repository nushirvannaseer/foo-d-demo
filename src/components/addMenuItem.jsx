import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import React, { Container, Row, Col, Component, useState } from "react";

export default function AddMenuItem(props) {
  const history = useHistory();
  var recipes = history.location.state.details;
  console.log(recipes);
  const [name, setName] = useState("");
  const [indg, setIndg] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };
 const onIndgChange = (event) => {
    setIndg(event.target.value);
  }; const onPriceChange = (event) => {
    setPrice(event.target.value);
  }; const onTagsChange = (event) => {
    setTags(event.target.value);
  };

  const handleSubmit = () => {
    recipes.push({
        name:name,
        indg:indg,
        price:price,
        tags:tags,
    });
    console.log(recipes);
    history.push("/restaurantProfile");
  };

  return (
    <React.Fragment>
      <h1>Add Details</h1>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" onChange={onNameChange} />
        <br />

        <label>Ingrediants: </label>
        <input type="text" onChange={onIndgChange} />
        <br />

        <label>Price: </label>
        <input type="text" onChange={onPriceChange} />
        <br />

        <label>Tags: </label>
        <input type="text" onChange={onTagsChange} />
        <br />

        <Button type="submit">Save</Button>
      </form>
    </React.Fragment>
  );
}


