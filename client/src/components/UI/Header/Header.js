import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      {/* <h1>Header</h1>; */}
      <div className="header">
        <div className="logo">
          <img
            src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_2x_icon_124_40_292e71bcb52a56e2a9005164118f183b.png"
            alt="App-Logo"
          />
          <span className="help-text">Milaav</span>
        </div>

        <div className="action-btn">
          <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} />

          <FontAwesomeIcon className="icon-block" icon={faExclamationCircle} />

          <FontAwesomeIcon className="icon-block" icon={faCog} />
        </div>
      </div>
    </>
  );
};

export default Header;
