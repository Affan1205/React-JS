import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
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
    setIsLoggedIn(true);
    toast.success("Logged In successfully");
    navigate("/dashboard");
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          <p>
            Email Address<sup>*</sup>
          </p>

          <input
            type="email"
            required
            value={formData.email}
            onChange={changeHandler}
            name="email"
            placeholder="Enter email id"
          />
        </label>

        <label>
          <p>
            Password<sup>*</sup>
          </p>

          <input
            type={showPassword ? "text" : "password"}
            required
            value={formData.password}
            onChange={changeHandler}
            name="password"
            placeholder="Enter your password"
          />

          <span onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>

          <Link to="#">
            <p>Forgot Password</p>
          </Link>

          <button>Sign In</button>
        </label>
      </form>
    </div>
  );
};

export default LoginForm;
