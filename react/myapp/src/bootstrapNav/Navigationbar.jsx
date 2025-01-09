import React from "react";
import Form from "./Form";
import Menus from "./Menus";
import Logo from "./Logo";

const Navigationbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#e2b0b0" }}
      >
        <div className="container-fluid">
          <Logo logoname="Logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#homebtn"
            aria-controls="homebtn"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="homebtn">
            <Menus />
            {/* <Form /> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigationbar;
