import { useState, useEffect } from "react";

import { Input } from "../component/Input";
import { Button } from "../component/Button";
import { useNavigate } from "react-router";

export const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
  });
  const navigate = useNavigate();

  const [allRequiredFilled, setAllRequiredFilled] = useState(false);

  useEffect(() => {
    const { fullName, phoneNumber, email, password } = formData;
    if (fullName && phoneNumber && email && password) {
      setAllRequiredFilled(true);
    } else {
      setAllRequiredFilled(false);
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateAccount = () => {
    navigate("/account-settings");
  };

  return (
    <div className="wel-auth-container">
      <div>
        <div className="wel-msg">
          <div className="msg">
            <h2>Create your PopX account</h2>
          </div>
        </div>
        <form>
          <Input
            placeholder="Enter your name"
            label="Full Name"
            name="fullName"
            required={true}
            onChange={handleChange}
          />
          <Input
            placeholder="Enter your phone number"
            label="Phone number"
            name="phoneNumber"
            required={true}
            onChange={handleChange}
          />
          <Input
            placeholder="Enter your email address"
            label="Email address"
            name="email"
            required={true}
            onChange={handleChange}
          />
          <Input
            placeholder="Enter your passwork"
            label="Password"
            name="password"
            required={true}
            type="password"
            onChange={handleChange}
          />
          <Input
            placeholder="Enter your company name"
            label="Company name"
            name="companyName"
            required={false}
            onChange={handleChange}
          />
          <div className="radio-group">
            <p>
              Are you an Agency?<span>*</span>
            </p>
            <div className="radio-buttons">
              <label>
                <input type="radio" name="agency" value="yes" required />
                Yes
              </label>
              <label>
                <input type="radio" name="agency" value="no" required />
                No
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className="auth-btns">
        <Button
          text="Create Account"
          onClick={handleCreateAccount}
          className={`register-acc-btn ${
            location.pathname === "/register" ? "m-top" : ""
          }`}
          disabled={!allRequiredFilled}
        />
      </div>
    </div>
  );
};
