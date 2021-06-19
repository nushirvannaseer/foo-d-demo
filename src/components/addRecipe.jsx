import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import React, { Container, Row, Col, Component, useState } from "react";

export default function AddRecipe(props) {
  const history = useHistory();
  var recipes = history.location.state.recipes;
  console.log(recipes);
  const [name, setName] = useState("");
  const [steps, setSteps] = useState([]);
  const [tags, setTags] = useState([]);

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onStepsChange = (event) => {
    setSteps(event.target.value);
  };

  const onTagsChange = (event) => {
    setTags(event.target.value);
  };

  const handleSubmit = () => {
    recipes.push({
      name: name,
      steps: steps,
      tags: tags,
    });
    console.log(recipes);
    history.push("/userProfile");
  };

  return (
    <React.Fragment>
      <h1>Add Recipe</h1>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" onChange={onNameChange} />
        <br />

        <label>Steps: </label>
        <input type="textarea" onChange={onStepsChange} />
        <br />

        <label>Tags: </label>
        <input type="text" onChange={onTagsChange} />
        <br />
        <Button type="submit">Save</Button>
      </form>
    </React.Fragment>
  );
}
