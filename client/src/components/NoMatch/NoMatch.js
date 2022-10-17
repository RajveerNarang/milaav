import React from "react";
import "./NoMatch.scss";
import Header from "../UI/Header/Header";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <>
      {/* <h1>No Match</h1> */}
      <div className="no-match">
        <Header />
        <div className="no-match__content">
          <h2>Invalid Meeting ID.</h2>
          <div className="action-btn">
            <Link className="btn green" to="/">
              Return To HomeScreen
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoMatch;
