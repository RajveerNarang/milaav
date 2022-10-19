import { React, useState, useEffect } from "react";
import "./CallPage.scss";
import { useParams, useNavigate } from "react-router-dom";
import CallPageHeader from "../UI/CallPageHeader/CallPageHeader";
import CallPageFooter from "../UI/CallPageFooter/CallPageFooter";
import MeetingInfo from "../UI/MeetingInfo/MeetingInfo";
import Messenger from "../UI/Messenger/Messenger";

const CallPage = () => {
  let { id } = useParams();
  const isAdmin = window.location.hash == "#init" ? true : false;
  const url = `${window.location.origin}${window.location.pathname}`;
  // let alertTimeout = null;
  // console.log(isAdmin, url);
  const [meetInfoPopup, setMeetInfoPopup] = useState(false);

  useEffect(() => {
    if (isAdmin) {
      setMeetInfoPopup(true);
    }
  }, []);

  return (
    <>
      {/* <h1>Call Page</h1> */}
      <div className="callpage-container">
        <video className="video-container" src="" controls></video>
        <CallPageHeader />
        <CallPageFooter />
        {/* <MeetingInfo /> */}
        {isAdmin && meetInfoPopup && (
          <MeetingInfo setMeetInfoPopup={setMeetInfoPopup} url={url} />
        )}
        <Messenger />
      </div>
    </>
  );
};

export default CallPage;
