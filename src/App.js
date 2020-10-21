import React, { useState, useEffect } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import "./App.css";
import Scroll from "./components/Scroll";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [state, setState] = useState({
    searchText: "",
    isLoading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setRobots(data);
    };
    fetchData();
  }, []);

  const handleChange = (evt) => {
    setState({ ...state, searchText: evt.target.value });
  };

  return robots.length === 0 ? (
    <h1 className="tc">Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchText={state.searchText} handleChange={handleChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={robots} searchText={state.searchText} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default App;
