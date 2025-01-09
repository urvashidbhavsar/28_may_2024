import React from "react";

const Menus = () => {
  let menulist = ["Home", "Service", "About", "Contact", "Blog"];
  return (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {menulist.map((item) => (
          <li className="nav-item" key={item}>
            <a className="nav-link active" aria-current="page" href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menus;
