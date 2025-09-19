import { useNavigate } from "react-router";
import { Button } from "../component/Button";
import { Header } from "../component/layout/Header";

export const Welcome = () => {
  const navigate = useNavigate();
  const handleLoginBtn = () => {
    navigate("login");
  };
  const handleRegBtn = () => {
    navigate("register");
  };
  return (
    <div className="wel-auth-container">
      <Header
        text="Welcome to PopX"
        sub_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
      />
      <div className="auth-btns">
        <div className="register-acc-btn">
          <Button text="Create Account" onClick={handleRegBtn} />
        </div>
        <div className="login-acc-btn">
          <Button text="Already Registered? Login" onClick={handleLoginBtn} />
        </div>
      </div>
    </div>
  );
};
