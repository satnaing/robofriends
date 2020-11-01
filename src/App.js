import React, { useEffect } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import "./App.css";
import Scroll from "./components/Scroll";
import ErrorBoundary from "./components/ErrorBoundary";
import { connect } from "react-redux";
import fetchRobots from "./redux/actions/fetchRobots";

const App = ({ robots, dispatch }) => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      dispatch(fetchRobots(data));
    };
    fetchData();
  }, [dispatch]);

  return robots.length === 0 ? (
    <h1 className="tc">Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={robots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

const mapStateToProps = ({ robots }) => ({
  robots,
});

export default connect(mapStateToProps)(App);
