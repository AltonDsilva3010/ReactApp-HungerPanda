import React, { useState } from "react";
import BackGroundImage from "../Images/background.png";
import "./SignUp.css";
import Alert from "./Alert";

const SignUp = () => {
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    dob: "",
  });

  const checkAge = (dob) => {
    var year = parseInt(dob.slice(0, 4));
    var month = parseInt(dob.slice(5, 7));
    var day = parseInt(dob.slice(8, 10));

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear() - 14;

    today = yyyy + "-" + mm + "-" + dd;

    if (year - yyyy > 0) {
      showAlert(true, "danger", "Age should be above 14 years");
    } else if (year - yyyy == 0 && month - mm > 0) {
      showAlert(true, "danger", "Age should be above 14 years");
    } else if (month - mm == 0 && day - dd > 0) {
      showAlert(true, "danger", "Age should be above 14 years");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, contact, dob } = formData;
    if (!name || !email || !password || !contact || !dob) {
      showAlert(true, "danger", "Fields cannot be empty");
    }
    checkAge(dob);
    console.log(formData);
    setFormData({ name: "", email: "", password: "", contact: "", dob: "" });
  };

  return (
    <div className="signuppage-container">
      <img src={BackGroundImage} alt="backgroundimage" className="bg-image" />
      <div className="signup-container">
        <h1>Signup with Us</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={showAlert} />}
          <div className="form-group">
            <label for="fname">Enter Name</label>
            <input
              type="text"
              id="fname"
              placeholder="Enter Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <label for="fname">Enter Email</label>
            <input
              type="text"
              id="fname"
              placeholder="Enter Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <label for="fname">Password</label>
            <input
              type="text"
              id="fname"
              placeholder="Enter Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <label for="fname">Contact No.</label>
            <input
              type="text"
              id="fname"
              placeholder="Enter ContactNo."
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
            />
            <label for="date">Date of Birth</label>
            <input
              type="date"
              id="date"
              value={formData.dob}
              onChange={(e) =>
                setFormData({ ...formData, dob: e.target.value })
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

export default SignUp;
