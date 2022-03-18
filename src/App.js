import React from "react";
import "./App.css";
import Profile from "./profile/Profile";
import sebVettel from "../src/SebVettel.jpg";

function App() {
  const handleName = (name) => alert(`Welcome ${name}`);
  return (
    <div>
      <Profile
        fullName="Sebastian Vettel"
        bio="Sebastian Vettel, (born July 3, 1987, Heppenheim, West Germany [now in Germany]), German race-car driver who in 2010, at age 23, became the youngest person to win the Formula One (F1) world drivers' championship. He also captured the title in 2011–13."
        profession={"Formula One Driver"}
        handleName={handleName}
      >
        <img src={sebVettel} alt="profile-pic" />
      </Profile>
      {/* Test Default props  */}
      {/* <Profile /> */}
    </div>
  );
}

export default App;
