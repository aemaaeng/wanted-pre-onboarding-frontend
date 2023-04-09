import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../components/Button";
import InputForm from "../components/InputForm";
import { defaultInstance } from "../util/api";

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

function Auth({ pageTitle }) {
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
      .catch((err) => console.log(err));
  };

  const handleSignInSubmit = () => {
    defaultInstance
      .post(
        "/auth/signin",
        { email: emailInput, password: passwordInput },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        localStorage.setItem("accessToken", res.data.access_token);
        navigate("/todo");
      })
      .catch((err) => console.log(err));
  };

  return (
    <SSignupContainer>
      <h1>{pageTitle}</h1>
      <InputForm
        handleEmailInput={handleEmailInput}
        handlePasswordInput={handlePasswordInput}
      />
      {pageTitle === "회원가입" ? (
        <SubmitButton
          testId="signup-button"
          text="회원가입"
          isAvailable={isAvailable}
          onClick={handleSignUpSubmit}
        />
      ) : (
        <SubmitButton
          testId="signin-button"
          text="로그인"
          isAvailable={isAvailable}
          onClick={handleSignInSubmit}
        />
      )}
    </SSignupContainer>
  );
}

export default Auth;
