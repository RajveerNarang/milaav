import React from "react";
import "./MeetingInfo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faTimes,
  faUser,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
const MeetingInfo = () => {
  return (
    <>
      {/* <h1>MeetingInfo</h1> */}
      <div className="meeting-info-block">
        <div className="meeting-header">
          <h3>Your Meeting's Ready</h3>
          <FontAwesomeIcon className="icon" icon={faTimes} />
        </div>
        <button className="add-people-btn">
          <FontAwesomeIcon icon={faUser} />
          Add Others
        </button>
        <p className="info-text">or share the meet link</p>
        <div className="meet-link">
          <span>random boom boom</span>
          <FontAwesomeIcon className="icon" icon={faCopy} />
        </div>
        <div className="permission-text">
          <FontAwesomeIcon className="icon" icon={faShieldAlt} />
          <p>some random data .....</p>
        </div>
      </div>
    </>
  );
};

export default MeetingInfo;
