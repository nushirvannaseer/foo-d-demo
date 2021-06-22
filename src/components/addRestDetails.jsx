import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import React, { Container, Row, Col, Component, useState } from "react";

export default function AddRestDet(props) {
  const history = useHistory();
  var details = history.location.state.details;
  console.log(details);
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const onAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const onPhoneChange = (event) => {
    setPhoneNo(event.target.value);
  };

  const handleSubmit = () => {
    details.push({ address: address, phoneNo: phoneNo });

    console.log(details);
    history.push("/restaurantProfile");
  };

  return (
    <React.Fragment>
      <h1>Add Details</h1>

      <form onSubmit={handleSubmit}>
        <label style={{ fontSize: "25px", marginRight: "10px" }}>Address: </label>
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
                    }} type="text" onChange={onAddressChange} />
        <br />

        <label style={{ fontSize: "25px", marginRight: "10px" }}>Phone Number: </label>
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
                    }} type="textarea" onChange={onPhoneChange} />
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
