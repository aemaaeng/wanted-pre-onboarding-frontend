import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../components/Button";
import { defaultInstance } from "../util/api";
import { toast } from "react-toastify";
import AuthInput from "../components/AuthInput";

const SSignUpContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  input {
    display: block;
    height: 30px;
    width: 220px;
    border: none;
    font-size: 1rem;
    margin-top: 3px;
    margin-bottom: 13px;

    &:focus {
      outline: none;
      border-color: var(--limeGreen);
      box-shadow: 0 0 7px var(--limeGreen);
    }
  }
`;

function SignUp() {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleEmailInput = (e) => {
    setEmailInput(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPasswordInput(e.target.value);
  };

  const checkInput = (email, password) => {
    if (email.includes("@") && password.length >= 8) return true;

    return false;
  };

  const isAvailable = checkInput(emailInput, passwordInput) ? true : false;

  const handleSignUpSubmit = () => {
    defaultInstance
      .post(
        "/auth/signup",
        { email: emailInput, password: passwordInput },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then(() => navigate("/signin"))
      .catch((err) => toast.error("회원가입에 실패했습니다."));
  };

  return (
    <SSignUpContainer>
      <h1>회원가입</h1>
      <AuthInput
        handleEmailInput={handleEmailInput}
        handlePasswordInput={handlePasswordInput}
      />
      <SubmitButton
        testId="signup-button"
        text="회원가입"
        isAvailable={isAvailable}
        onClick={handleSignUpSubmit}
      />
    </SSignUpContainer>
  );
}

export default SignUp;
