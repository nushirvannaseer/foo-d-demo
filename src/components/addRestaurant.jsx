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
                    Address:{" "}
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
                    onChange={onAddressChange}
                />
                <br />

                <label style={{ fontSize: "25px", marginRight: "10px" }}>
                    Phone:{" "}
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
                    onChange={onPhoneChange}
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
