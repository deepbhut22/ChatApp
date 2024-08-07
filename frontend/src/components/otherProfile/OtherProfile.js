import React, { useContext, useEffect, useState } from "react";
import "./otherProfile.css";
import { userContext } from "../../MainContext.js";
import axios from "axios";

const OtherProfile = () => {
  const { otherName, isProfileOpen, setIsProfileOpen, conversationId } =
    useContext(userContext);
  const [otherUserData, setOtherUserData] = useState({});

  const getInfo = async (req, res) => {
    const response = await axios.get("/api/v1/getuser/" + otherName);
    setOtherUserData(response.data);
  };

  const handelDeleteMesssages = async () => {
    if(window.confirm("Are You Sure You Want To Delete All Messages With " + otherName))
    await axios.delete("/api/v1/deleteMessages/" + conversationId.id)
  }

  useEffect(() => {
    getInfo();
  },[]);

  return (
    <div className="otherProfile">
      <div className="closebar">
        <svg
          className="closeButton"
          onClick={() =>
            setIsProfileOpen({
              state: !isProfileOpen,
              profile: "own",
            })
          }
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
        >
          <style>{"svg{fill:#11009e}"}</style>
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </div>
      <div className="prof-pic">
        <img src={otherUserData.profilePicture} alt="img" className="profImg" />
      </div>
      <div className="usm">
        <h2>{otherName}</h2>
      </div>

      <span className="abtlabel">ABOUT: </span>
      <div className="about">
        <p className="aboutContent">
          {otherUserData.about ? (
            otherUserData.about
          ) : (
            <p className="aboutPara" style={{ color: "gray" }}></p>
          )}
        </p>
      </div>
      <div className="buttons">
        <button className="addconvButton"
          onClick={()=>{
            handelDeleteMesssages();
            setIsProfileOpen({
              msgdeleted: !isProfileOpen.msgdeleted
            })
          }}
        >Delete All Messages</button>
      </div>
    </div>
  );
};

export default OtherProfile;
