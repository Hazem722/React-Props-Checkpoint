import React from "react";
import willSmith from "../willSmith.jpg";
import PropTypes from "prop-types";

export default function Profile(props) {
  const globalStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#009688",
    color: "white",
    border: "2px solid #333",
    borderRadius: "10px",
    padding: "20px",
  };
  const headingStyle = {
    fontSize: "35px",
    textAlign: "center",
    letterSpacing: "2px",
    fontWeight: "800",
    color: "chartreuse",
  };
  return (
    <div className="Profile" style={globalStyle}>
      <h1 style={headingStyle}>{props.fullName}</h1>
      <h2>{props.profession}</h2>
      <p>{props.bio}</p>
      {props.children}
      {props.handleName(props.fullName)}
    </div>
  );
}

Profile.defaultProps = {
  fullName: "Will Smith",
  bio: 'Willard Carroll "Will" Smith, Jr. (born September 25, 1968) is an American actor, comedian, producer, rapper, and songwriter. He has enjoyed success in television, film, and music. In April 2007, Newsweek called him "the most powerful actor in Hollywood".',
  profession: "Actor || Film Producer || Rapper || Director || Composer",
  children: <img src={willSmith} alt="Will Smith" />,
  handleName: (name) => alert(`Welcome ${name}`),
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
  children: PropTypes.any,
};
