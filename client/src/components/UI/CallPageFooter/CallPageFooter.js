import React from "react";
import "./CallPageFooter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faMicrophone,
  faPhoneFlip,
  faAngleUp,
  faClosedCaptioning,
  faDesktop,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";

const CallPageFooter = () => {
  return (
    <>
      {/* <h1>CallPageFooter</h1> */}
      <div className="footer-item">
        <div className="left-item">
          <div className="icon-block">
            Meeting Details
            <FontAwesomeIcon className="icon" icon={faAngleUp} />
          </div>
        </div>
        <div className="center-item">
          <div className="icon-block">
            <FontAwesomeIcon className="icon" icon={faMicrophone} />
          </div>

          <div className="icon-block">
            <FontAwesomeIcon className="icon red" icon={faPhoneFlip} />
          </div>

          <div className="icon-block">
            <FontAwesomeIcon className="icon" icon={faVideo} />
          </div>
        </div>
        <div className="right-item">
          <div className="icon-block">
            <FontAwesomeIcon className="icon red" icon={faClosedCaptioning} />
            <p className="title">Turn on captions</p>
          </div>

          <div className="icon-block">
            <FontAwesomeIcon className="icon red" icon={faDesktop} />
            <p className="title">Present Now</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallPageFooter;
