import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Row, Container } from "react-bootstrap";

import { useHistory } from "react-router";
import userIcon from './../images/userIcon.png'
import restaurantIcon from './../images/restaurantsIcon.png'

function AccountTypeSelection(props) {
  const history = useHistory();

  return (
    <React.Fragment>
      <Container style={{display:"flex", width:"100vw", height:"100vh", flexDirection:"column", justifyContent:"center", alignItems:"center"} }>
        <Row>
          <Button style={{width:"400px", height:"200px", marginBottom:"50px"}} onClick={() => history.push("/userProfile")}>
            <img style={{width:'150px', height:'fit-content'}} src={userIcon} alt=""></img>
            User
            </Button>
        </Row>
        <Row>
          <Button style={{width:"400px", height:"200px", marginBottom:"50px"}} onClick={() => history.push("restaurantProfile")}>
            <img style={{width:'150px', height:'fit-content'}} src={restaurantIcon} alt=""></img>
            Restaurant
          </Button>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default AccountTypeSelection;
