import React from "react";

const Logo = (props) => {
  return (
    <>
      <a className="navbar-brand" href="#">
        <h1>{props.logoname}</h1>
      </a>
    </>
  );
};

export default Logo;
