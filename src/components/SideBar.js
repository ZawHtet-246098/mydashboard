import React from "react";

const SideBar = ({ setCurrentMenu }) => {
  const changeMenu = (e) => {
    setCurrentMenu(e.target.value);
  };
  return (
    <div
      className="text-white text-center"
      style={{ background: "#343A40", minHeight: "100vh" }}
    >
      <h5 className="text-start ps-3 pt-3 border-bottom pb-3">Admin Board</h5>
      <input
        type="text"
        name="search"
        className="p-1 col-11 m-auto my-2 rounded border-0"
        style={{ background: "#3F474E" }}
        placeholder="search"
      />
      <div className="btnsContainer border-top py-2">
        <button
          onClick={(e) => changeMenu(e)}
          value="Dashboard"
          style={{ background: "#3F474E" }}
          className="col-11 p-2 border-0 m-1 text-start text-white rounded"
        >
          Dashboard
        </button>
        <button
          onClick={(e) => changeMenu(e)}
          value="Member List"
          style={{ background: "#3F474E" }}
          className="col-11 p-2 border-0 m-1 text-start text-white rounded"
        >
          Member List
        </button>
        <button
          onClick={(e) => changeMenu(e)}
          value="Admin List"
          style={{ background: "#3F474E" }}
          className="col-11 p-2 border-0 m-1 text-start text-white rounded"
        >
          Admin List
        </button>
        <button
          onClick={(e) => changeMenu(e)}
          value="Package"
          style={{ background: "#3F474E" }}
          className="col-11 p-2 border-0 m-1 text-start text-white rounded"
        >
          Package
        </button>
      </div>
    </div>
  );
};

export default SideBar;
