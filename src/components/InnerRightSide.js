import React from "react";
import AdminList from "./MenuPages/AdminList";
import AuditLog from "./MenuPages/AuditLog";
import Email from "./MenuPages/Email";
import EmailSetting from "./MenuPages/EmailSetting";
import MemberList from "./MenuPages/MemberList";
import Packages from "./MenuPages/Packages";
import TrackerUsers from "./MenuPages/TrackerUsers";

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
        {currentMenu === "Audit Log" && <AuditLog />}
        {currentMenu === "Email Setting" && <EmailSetting />}
        {currentMenu === "Tracker Users" && <TrackerUsers />}
        {currentMenu === "Email" && <Email />}
      </div>
    </div>
  );
};

export default InnerRightSide;
