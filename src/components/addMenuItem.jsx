import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import React, { Container, Row, Col, Component, useState } from "react";

export default function AddMenuItem(props) {
  const history = useHistory();
  var items = history.location.state.menuItems;
  console.log(items);
  const [name, setName] = useState("");
  const [indg, setIndg] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onIndgChange = (event) => {
    setIndg(event.target.value);
  };
  const onPriceChange = (event) => {
    setPrice(event.target.value);
  };
  const onTagsChange = (event) => {
    setTags(event.target.value);
  };

  const handleSubmit = () => {
    items.push({
      name: name,
      ingredients: indg,
      price: price,
      tags: tags,
    });
    console.log(items);
    history.push("/restaurantProfile");
  };

  return (
    <React.Fragment>
      <h1>Add Details</h1>

      <form onSubmit={handleSubmit}>
        <label style={{ fontSize: "25px", marginRight: "10px" }}>Name: </label>
        <input style={{
                        width: "300px",
                        height: "50px",
                        marginTop: "30px",
                        borderRadius: "50px",
                        borderStyle: "solid",
                        textAlign: "center",
                        paddingLeft: "8px",
                        paddingRight: "8px",
                        borderColor: "black",
                    }} type="text" onChange={onNameChange} />
        <br />

        <label style={{ fontSize: "25px", marginRight: "10px" }}>Ingredients: </label>
        <input style={{
                        width: "300px",
                        height: "50px",
                        marginTop: "30px",
                        borderRadius: "50px",
                        borderStyle: "solid",
                        textAlign: "center",
                        paddingLeft: "8px",
                        paddingRight: "8px",
                        borderColor: "black",
                    }} type="text" onChange={onIndgChange} />
        <br />

        <label style={{ fontSize: "25px", marginRight: "10px" }}>Price: </label>
        <input style={{
                        width: "300px",
                        height: "50px",
                        marginTop: "30px",
                        borderRadius: "50px",
                        borderStyle: "solid",
                        textAlign: "center",
                        paddingLeft: "8px",
                        paddingRight: "8px",
                        borderColor: "black",
                    }} type="text" onChange={onPriceChange} />
        <br />

        <label style={{ fontSize: "25px", marginRight: "10px" }}>Tags: </label>
        <input  style={{
                        width: "300px",
                        height: "50px",
                        marginTop: "30px",
                        borderRadius: "50px",
                        borderStyle: "solid",
                        textAlign: "center",
                        paddingLeft: "8px",
                        paddingRight: "8px",
                        borderColor: "black",
                    }}type="text" onChange={onTagsChange} />
        <br />

        <Button
                    style={{
                        borderRadius: "50px",
                        borderStyle: "solid",
                        marginTop: "40px",
                        marginBottom: "10px",
                        width: "80px",
                        marginRight: "10px",
                    }}
                    type="submit"
                >
                    Save
                </Button>

                <Button
                    className="clickable"
                    style={{
                        borderRadius: "50px",
                        borderStyle: "solid",
                        marginTop: "40px",
                        marginBottom: "10px",
                        marginLeft: "10px",
                    }}
                    onClick={() => {
                        history.push("/");
                    }}
                >
                    Go to Home
                </Button>
      </form>
    </React.Fragment>
  );
}
