import React, { Component } from "react";
import SearchKey from "./searchKey";
import {Button } from "react-bootstrap";

class ShowResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
    };
  }

  render() {
    return (
      <div>
        <input
          style={{width:'300px', height:'50px', marginTop:'30px', borderRadius:'50px', borderStyle:'solid', textAlign:'center', paddingLeft:'8px', paddingRight:'8px', borderColor:'black'}}
          placeholder="Search restaurants or recipes"
          onChange={(event) => {
            this.setState({ key: event.target.value });
          }}
        />
        {/* <Button onClick={SearchKey} className="btn btn-primary btn-lg" onClick={this.searchKey}>Search</Button> */}
        <SearchKey props={this.state.key}></SearchKey>
        <Button className='clickable' style={{
                                borderRadius: "50px",
                                borderStyle: "solid",
                                marginTop: "40px",
                                marginBottom: "10px",
                            }}
                            onClick={() =>{
                                this.props.history.push('/')
                            }
                                
                            }
                        >
                            Go to Home
                        </Button>
      </div>
    );
  }
}
export default ShowResults;
