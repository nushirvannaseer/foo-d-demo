import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Row, Container } from "react-bootstrap";

import { useHistory } from "react-router";

function AccountTypeSelection(props) {
  const history = useHistory();

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Button onClick={() => history.push("/userProfile")}>User</Button>
        </Row>
        <Row>
          <Button onClick={() => history.push("restaurantProfile")}>
            Restaurant
          </Button>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default AccountTypeSelection;
