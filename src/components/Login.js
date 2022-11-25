import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const defaultLoginData = {
  email: null,
  password: null,
};
const Login = () => {
  const [loginData, setLoginData] = useState(defaultLoginData);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  console.log(loginData);

  const handleSubmit = () => {
    if (loginData.email !== "null" && loginData.password !== "null") {
      fetch("http://aptm-b.ethical-digit.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      }).then((data) => console.log(data));
    }
  };

  return (
    <div
      className="text-center "
      style={{ background: "#E9ECEF", height: "100vh", paddingTop: "9rem" }}
    >
      <div
        style={{ width: "500px", border: "1px solid red", marginTop: "9rem" }}
        className="border m-auto pb-4 bg-white rounded"
      >
        <h3 className="my-3 pb-3 border-bottom">Admin Dashboard Login</h3>
        <h5 className="mb-3">Sign in to start your session</h5>
        <input
          type="email"
          name="email"
          className="p-2 border col-10 rounded"
          placeholder="email"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="p-2 col-10 my-3 rounded border"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <button
          onClick={handleSubmit}
          className="col-10 border p-2 rounded mt-4"
        >
          Login
        </button>

        <p className="pt-4">
          <a href="">forget password</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
