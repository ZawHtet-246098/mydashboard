import React, { useState } from "react";

import { FaEdit } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

const emailTypes = [
  {
    title: "Student Admission",
    mail: "Dear UserName your admission is confirm in class:class Section:section for session: current_session_name for more detail contact System Admin class section admisssion_no roll_no admission_date mobileno email dob grardian_name guardian_relatino guardian_phone father_name father_phone blood_group mother_name gender guardian_emal",
  },
  {
    title: "test",
    mail: "hello world i am here i am here i am here",
  },
];

const Email = () => {
  const [selectedOptions, setSelectedOptions] = useState(null);
  const [editEmailData, setEditEmailData] = useState(false);
  const [currentEmailSample, setCurrentEmailSample] = useState();

  console.log(currentEmailSample);

  const handleCheckChange = (e) => {
    const { value, checked } = e.target;

    if (checked && value === "Email") {
      setSelectedOptions({ option1: value });
    } else if (checked && value === "SMS") {
      setSelectedOptions({ ...selectedOptions, option2: value });
    } else {
      setSelectedOptions({ option1: null, option2: null });
    }
  };

  const handleEditEmailSample = (detail) => {
    setEditEmailData(!editEmailData);
    setCurrentEmailSample(detail);
  };

  console.log(selectedOptions);
  return (
    <div style={{ position: "relative" }}>
      <h3>Notification Setting</h3>
      <div className="px-2">
        <div className="d-flex">
          <p className="col-3" style={{ fontWeight: "bold" }}>
            Event
          </p>
          <p className="col-3" style={{ fontWeight: "bold" }}>
            Options
          </p>
          <p className="col-6" style={{ fontWeight: "bold" }}>
            Template Sample Message
          </p>
        </div>
        {emailTypes?.map((detail, index) => (
          <div key={index} className="d-flex border-top border-bottom py-2">
            <div style={{ fontWeight: "bold" }} className="col-3">
              {detail.title}
            </div>
            <div className="col-3">
              <input
                type="checkbox"
                id="Email"
                name="Email"
                value="Email"
                onClick={(e) => handleCheckChange(e)}
              />
              <label className="ps-2 pe-3" for="Email">
                Email
              </label>
              <input
                onClick={(e) => handleCheckChange(e)}
                type="checkbox"
                id="SMS"
                name="SMS"
                value="SMS"
              />
              <label className="ps-2 pe-3" for="SMS">
                SMS
              </label>
            </div>
            <div className="col-6">
              <p className=" mb-0 pb-2">{detail.mail}</p>
              <span
                style={{ background: "#0000FF" }}
                className="text-white rounded px-2 py-1"
              >
                <FaEdit
                  onClick={() => handleEditEmailSample(detail)}
                  style={{ fontSize: "1.2rem" }}
                  className="m-0"
                />
              </span>
            </div>
          </div>
        ))}

        {editEmailData && (
          <div
            style={{
              height: "510px",
              width: "50vw",
              background: "#343A40",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -20%)",

              // transform: "translate(-50%, -50%)",
            }}
            className="adminsUpdatePopupedForm border p-2 m-auto text-white text-center rounded"
          >
            <form
              action=""
              style={{ maxWidth: "600px" }}
              className="m-auto pt-5 text-start"
            >
              <div style={{ position: "relative" }}>
                <h3 className="pb-3">Template</h3>
                <h5>{currentEmailSample?.title}</h5>
                <RxCrossCircled
                  onClick={() => setEditEmailData(!editEmailData)}
                  className="h2"
                  style={{
                    fontWeight: "bold",
                    position: "absolute",
                    right: "-30px",
                    top: "-50px",
                  }}
                />
              </div>
              <label htmlFor="Subject">
                Subject <sapn style={{ color: "red" }}>*</sapn>
              </label>
              <input
                type="text"
                placeholder="Header"
                style={{ border: "1px solid" }}
                className="w-100 p-2 my-2 rounded"
                value={currentEmailSample?.title}
              />
              <br />
              <label htmlFor="Subject">
                Template <sapn style={{ color: "red" }}>*</sapn>
              </label>
              <textarea
                name="text"
                id=""
                cols="30"
                rows="6"
                placeholder="Mail"
                style={{ border: "1px solid" }}
                className="w-100 p-2 my-2 rounded"
              >
                {currentEmailSample?.mail}
              </textarea>
              <button
                className="w-100 p-2 my-2 rounded mt-3"
                style={{ border: "1px solid" }}
              >
                Save
              </button>
            </form>
          </div>
        )}
        {/* <table>
          <tr>
            <th>Event</th>
            <th>Options</th>
            <th>Template Sample Message</th>
          </tr>
          <tr>
            <td>Student Admission</td>
            <td>
                 <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                <label for="vehicle1"> I have a bike</label>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                <label for="vehicle2"> I have a car</label>
            </td>

            <td>helo</td>
          </tr>
        </table> */}
      </div>
    </div>
  );
};

export default Email;
