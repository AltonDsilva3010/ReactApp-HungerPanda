import React, { useState } from "react";
import "./SignUp.css";
import BackGroundImage from "../Images/background.png";
import Alert from "./Alert";

const LoginPage = () => {
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      showAlert(true, "danger", "Fields cannot be empty");
    }

    console.log(formData);
    setFormData({ email: "", password: "" });
  };
  return (
    <div className="loginpage-container">
      <img src={BackGroundImage} alt="backgroundimage" className="bg-image" />
      <div className="login-container">
        <h1>Login with Us</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={showAlert} />}
          <div className="form-group">
            <label for="email">Email Address</label>
            <input
              type="text"
              id="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <label for="pass">Password</label>
            <input
              type="text"
              id="pass"
              placeholder="Enter Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <label for="checkme">
            <input
              type="checkbox"
              id="checkme"
              name="checkme"
              value="Check"
              className="checkbox-class"
            ></input>
            Check Me Out
          </label>
          <br />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
