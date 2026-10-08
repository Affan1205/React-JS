import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate=useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  function changeHandler(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };
    console.log("Printing account data")
    console.log(accountData)
    navigate('/dashboard')
  }
  return (
    <div>
      {/* student instructor tab */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* contain first and last name */}
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              type="text"
              required
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter First name"
            />
          </label>

          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              type="text"
              required
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter Last name"
            />
          </label>
        </div>

        {/* email Add */}
        <label>
          <p>
            Email Address <sup>*</sup>
          </p>
          <input
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Email address"
          />
        </label>

        {/* createpassword and confirm password */}
        <div>
          <label>
            <p>
              Create Password<sup>*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter Password"
            />

            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          <label>
            <p>
              Confirm Password<sup>*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              required
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Enter confirmPassword"
            />

            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
