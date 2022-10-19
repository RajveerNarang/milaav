import React from "react";
import "./HomePage.scss";
import Header from "../UI/Header/Header";
import { useNavigate } from "react-router-dom";
import shortid from "shortid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const navigate = useNavigate();
  const startCall = () => {
    //generate unique id

    const uid = shortid.generate();
    //redirect to home page
    // history.push(`/${uid}#init`);
    navigate(`/${uid}#init`);
  };

  return (
    <>
      {/* <h1>HomePage</h1> */}
      <div className="home-page">
        <Header />
        <div className="body">
          <div className="left-side">
            <div className="content">
              <h2>Premium video meetings. Now Free For Everyone.</h2>
              <p>
                we re-engineered the service we built for secure business
                meetings, Milaav to make it free and available for all.
              </p>
              <div className="action-btn">
                <button className="btn green" onClick={startCall}>
                  <FontAwesomeIcon className="icon-block" icon={faVideo} />
                  New Meeting
                </button>
                <div className="input-block">
                  <div className="input-section">
                    <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                    <input placeholder="Enter a code or link" />
                  </div>
                  <button className="btn no-bg">Join</button>
                </div>
              </div>
            </div>
            <div className="help-text">
              <a href="https://apps.google.com/meet/">Learn More</a> about
              Milaav
            </div>
          </div>
          <div className="right-side">
            <div className="content">
              <img
                src="https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg"
                alt="example call"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
