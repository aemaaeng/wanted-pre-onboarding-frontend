import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../components/Button";
import AuthInput from "../components/AuthInput";
import { defaultInstance } from "../util/api";
import { toast } from "react-toastify";

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
      .catch((err) => toast.error("회원가입에 실패했습니다."));
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
      .catch((err) => {
        if (err.response.status === 404 || err.response.status === 401) {
          return toast.error("이메일 또는 비밀번호가 틀렸습니다.");
        }

        return toast.error("로그인에 실패했습니다.");
      });
  };

  return (
    <SSignupContainer>
      <h1>{pageTitle}</h1>
      <AuthInput
        handleEmailInput={handleEmailInput}
        handlePasswordInput={handlePasswordInput}
      />
      {pageTitle === "회원가입" ? (
        <SubmitButton
          testId="signup-button"
          text={pageTitle}
          isAvailable={isAvailable}
          onClick={handleSignUpSubmit}
        />
      ) : (
        <SubmitButton
          testId="signin-button"
          text={pageTitle}
          isAvailable={isAvailable}
          onClick={handleSignInSubmit}
        />
      )}
    </SSignupContainer>
  );
}

export default Auth;
