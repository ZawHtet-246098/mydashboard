import React from "react";

const EmailSetting = () => {
  return (
    <div className="px-2">
      {/* <table>
        <tr>
          <th>ID</th>
          <th>Package Name</th>
          <th>Month(s)</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </table> */}
      <form
        style={{ width: "600px" }}
        className="pt-3 border m-auto mt-5"
        action=""
      >
        <h3 className="text-center">Send Mail</h3>
        <div className="my-2  text-center">
          <label
            className="text-start"
            style={{ minWidth: "120px" }}
            htmlFor="Email Setting"
          >
            Email Engine
          </label>
          <input className="p-2" style={{ width: "400px" }} type="text" />
        </div>
        <div className="my-2  text-center">
          <label
            className="text-start"
            style={{ minWidth: "120px" }}
            htmlFor="Email Setting"
          >
            SMTP Username
          </label>
          <input className="p-2" style={{ width: "400px" }} type="text" />
        </div>
        <div className="my-2  text-center">
          <label
            className="text-start"
            style={{ minWidth: "120px" }}
            htmlFor=""
          >
            SMTP Password
          </label>
          <input className="p-2" style={{ width: "400px" }} type="text" />
        </div>

        <div className="my-2  text-center">
          <label
            className="text-start"
            style={{ minWidth: "120px" }}
            htmlFor=""
          >
            SMTP Server
          </label>
          <input className="p-2" style={{ width: "400px" }} type="text" />
        </div>

        <div className="my-2  text-center">
          <label
            className="text-start"
            style={{ minWidth: "120px" }}
            htmlFor=""
          >
            SMTP Port
          </label>
          <input className="p-2" style={{ width: "400px" }} type="text" />
        </div>

        <div className="my-2  text-center">
          <label
            className="text-start"
            style={{ minWidth: "120px" }}
            htmlFor=""
          >
            SMTP Security
          </label>
          <input className="p-2" style={{ width: "400px" }} type="text" />
        </div>

        <div className="my-2  text-center">
          <label
            className="text-start"
            style={{ minWidth: "120px" }}
            htmlFor=""
          >
            SMTP Auth
          </label>
          <input className="p-2" style={{ width: "400px" }} type="text" />
        </div>

        <button
          style={{ marginLeft: "10rem", border: "1px solid black" }}
          className="p-2 text-start rounded mb-2"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default EmailSetting;
