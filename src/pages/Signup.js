import styled from "styled-components";
import { useState } from "react";
import { SubmitButton } from "../components/Button";

const SSignupContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  input {
    display: block;
    height: 30px;
    width: 220px;
    font-size: 1rem;
    margin-top: 3px;
    margin-bottom: 13px;

    &:focus {
      outline: none;
      border-color: var(--green);
      box-shadow: 0 0 7px var(--green);
    }
  }
`;

function Signup() {
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

  const handleSubmit = () => {
    // TODO: 회원가입 기능 구현
  };

  return (
    <SSignupContainer>
      <h1>회원가입</h1>
      <div>
        <label htmlFor="emailInput">이메일</label>
        <input
          data-testid="email-input"
          id="emailInput"
          onChange={(e) => handleEmailInput(e)}
        />
        <label htmlFor="passwordInput">비밀번호</label>
        <input
          data-testid="password-input"
          id="passwordInput"
          type="password"
          onChange={(e) => handlePasswordInput(e)}
        />
      </div>
      <SubmitButton
        data-testid="signup-button"
        text="회원가입"
        isAvailable={isAvailable}
        onClick={handleSubmit}
      />
    </SSignupContainer>
  );
}

export default Signup;
