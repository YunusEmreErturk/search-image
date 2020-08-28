import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    searchWord: "",
  };

  inputChanged = (event) => {
    this.setState({
      searchWord: event.target.value,
    });
  };

  searchImage = () => {
    console.log("success");
  }

  render() {
    return (
      <div className="search-bar-container ui input">
        <input
          type="text"
          onKeyPress={(e)=>{
            if(e.key === 'Enter'){
              this.searchImage();
            }
          }}
          onChange={this.inputChanged}
          placeholder="Search..."
        />
        <button className="ui icon button" onClick={this.searchImage} >
          <i className="search icon"></i>
        </button>
      </div>
    );
  }
}

export default SearchBar;
