import React from "react";

const Showalert = () => {
  let showmessage = () => {
    alert("Welcome");
  };

  let text = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      {/* inline */}
      {/* do not use like this line */}
      {/* <button className="btn btn-primary" onClick={alert("hello")}></button> */}

      <button className="btn btn-primary" onClick={() => alert("hello")}>
        Click Here
      </button>

      <button className="btn btn-danger" onClick={showmessage}>
        Click
      </button>

      <input type="search" onChange={text} />
    </>
  );
};

export default Showalert;
