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
                <label style={{ fontSize: "25px", marginRight: "10px" }}>
                    Name:{" "}
                </label>
                <input
                    style={{
                        width: "300px",
                        height: "50px",
                        marginTop: "30px",
                        borderRadius: "50px",
                        borderStyle: "solid",
                        textAlign: "center",
                        paddingLeft: "8px",
                        paddingRight: "8px",
                        borderColor: "black",
                    }}
                    type="text"
                    onChange={onNameChange}
                />
                <br />

                <label style={{ fontSize: "25px", marginRight: "10px" }}>
                    Steps:{" "}
                </label>
                <input
                    style={{
                        width: "300px",
                        height: "50px",
                        marginTop: "30px",
                        borderRadius: "50px",
                        borderStyle: "solid",
                        textAlign: "center",
                        paddingLeft: "8px",
                        paddingRight: "8px",
                        borderColor: "black",
                    }}
                    type="textarea"
                    onChange={onStepsChange}
                />
                <br />

                <label style={{ fontSize: "25px", marginRight: "10px" }}>
                    Tags:{" "}
                </label>
                <input
                    style={{
                        width: "300px",
                        height: "50px",
                        marginTop: "30px",
                        borderRadius: "50px",
                        borderStyle: "solid",
                        textAlign: "center",
                        paddingLeft: "8px",
                        paddingRight: "8px",
                        borderColor: "black",
                    }}
                    type="text"
                    onChange={onTagsChange}
                />
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
