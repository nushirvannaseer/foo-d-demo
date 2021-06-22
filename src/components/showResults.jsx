import React, { Component } from "react";
import SearchKey from "./searchKey";

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
          className="search-bar"
          placeholder="Search restaurants or recipes"
          onChange={(event) => {
            this.setState({ key: event.target.value });
          }}
        />
        {/* <Button onClick={SearchKey} className="btn btn-primary btn-lg" onClick={this.searchKey}>Search</Button> */}
        <SearchKey props={this.state.key}></SearchKey>
      </div>
    );
  }
}
export default ShowResults;
