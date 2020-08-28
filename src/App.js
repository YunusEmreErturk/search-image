import React, { Component } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import ListPage from "./components/listPage/ListPage";
import axios from "axios";
import "./App.css";

class App extends Component {

  state = {
    images:[]
  }

  onSearchImage = async (searchWord) => {
    console.log("APP: " + searchWord);
    const result = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: searchWord,
      },
      headers: {
        Authorization: "Client-ID T1YSlyWTr9i8fLhNewNxlP43yI0OuTEltE4t88acEAA",
      },
    });
    this.setState({
      images:result.data.results
    })
  };

  render() {
    return (
      <div className="app-container">
        <SearchBar onSearchImage={this.onSearchImage} />
        <ListPage images={this.state.images}/>
      </div>
    );
  }
}

export default App;
