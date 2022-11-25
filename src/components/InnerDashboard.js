import React from "react";
import { useGlobalContext } from "../context";
import InnerRightSide from "./InnerRightSide";
import SideBar from "./SideBar";

const InnerDashboard = () => {
  const { currentMenu, setCurrentMenu } = useGlobalContext();
  return (
    <div style={{ minHeight: "100vh" }} className="w-100 d-flex">
      <div className="col-2">
        <SideBar setCurrentMenu={setCurrentMenu} />
      </div>
      <div className="col-10">
        <InnerRightSide currentMenu={currentMenu} />
      </div>
    </div>
  );
};

export default InnerDashboard;
