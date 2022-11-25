import React from "react";
import AdminList from "./MenuPages/AdminList";
import MemberList from "./MenuPages/MemberList";
import Packages from "./MenuPages/Packages";

const InnerRightSide = ({ currentMenu }) => {
  console.log(currentMenu);
  return (
    <div className="w-100 h-100">
      <div className="uppderNavbar ">
        <ul className="d-flex pe-5 border m-0 py-3 justify-content-end align-itmes-center">
          <li style={{ listStyleType: "none" }} className="px-3">
            menu
          </li>
          <li style={{ listStyleType: "none" }} className="px-3">
            user
          </li>
          <li style={{ listStyleType: "none" }} className="px-3">
            notification
          </li>
        </ul>
      </div>
      <div className="menuDisplayWrapper">
        {currentMenu === "Member List" && <MemberList />}
        {currentMenu === "Admin List" && <AdminList />}
        {currentMenu === "Package" && <Packages />}
      </div>
    </div>
  );
};

export default InnerRightSide;
