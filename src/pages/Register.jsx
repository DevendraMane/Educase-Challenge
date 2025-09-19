import { useState, useEffect } from "react";

import { Input } from "../component/Input";
import { Button } from "../component/Button";

export const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
  });

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
    console.log("Creating account with data:", formData);
  };

  return (
    <div className="wel-auth-container">
      <div className="wel-msg">
        <div className="msg">
          <h2>Create your PopX account</h2>
        </div>
      </div>
      <form>
        <Input
          label="Full Name"
          name="fullName"
          placeholder="Marry Doe"
          required={true}
          onChange={handleChange}
        />
        <Input
          label="Phone number"
          name="phoneNumber"
          placeholder="Marry Doe"
          required={true}
          onChange={handleChange}
        />
        <Input
          label="Email address"
          name="email"
          placeholder="Marry Doe"
          required={true}
          onChange={handleChange}
        />
        <Input
          label="Password"
          name="password"
          placeholder="Marry Doe"
          required={true}
          type="password"
          onChange={handleChange}
        />
        <Input
          label="Company name"
          name="companyName"
          placeholder="Marry Doe"
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
      <div className="auth-btns">
        <Button
          text="Create Account"
          onClick={handleCreateAccount}
          className="register-acc-btn"
          disabled={!allRequiredFilled}
        />
      </div>
    </div>
  );
};
