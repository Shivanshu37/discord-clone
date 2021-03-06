import React from "react";
import "./ChatHeader.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SearchIcon from "@material-ui/icons/Search";
import HelpIcon from "@material-ui/icons/Help";
function ChatHeader({ channelName }) {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="chatHeader__right">
        <NotificationsIcon />
        <EditLocationIcon />
        <PeopleAltIcon />
        <div className="chatHeader__Search">
          <input placeholder="Search" />
          <SearchIcon />
        </div>
        <SearchIcon />
        <HelpIcon />
      </div>
    </div>
  );
}

export default ChatHeader;
