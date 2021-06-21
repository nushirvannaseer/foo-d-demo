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
        <label>Address: </label>
        <input type="text" onChange={onAddressChange} />
        <br />

        <label>Phone Number: </label>
        <input type="textarea" onChange={onPhoneChange} />
        <br />

        <Button type="submit">Save</Button>
      </form>
    </React.Fragment>
  );
}
