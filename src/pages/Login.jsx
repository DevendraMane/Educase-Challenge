import { useState, useEffect } from "react";

import { Input } from "../component/Input";
import { Button } from "../component/Button";
import { Header } from "../component/layout/Header";
import { useNavigate } from "react-router";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [allRequiredFilled, setAllRequiredFilled] = useState(false);

  useEffect(() => {
    const { email, password } = formData;
    if (email && password) {
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
      <Header
        text="Signin to your PopX account"
        sub_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <form>
        <Input
          placeholder="Enter your email address"
          label="Email address"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          placeholder="Enter your password"
          label="Password"
          name="password"
          required
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
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
