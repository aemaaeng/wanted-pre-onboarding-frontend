import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../components/Button";
import { defaultInstance } from "../util/api";
import { toast } from "react-toastify";

const SSignInContainer = styled.main`
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

function SignIn() {
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
    <SSignInContainer>
      <h1>로그인</h1>
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
        testId="signin-button"
        text="로그인"
        isAvailable={isAvailable}
        onClick={handleSignInSubmit}
      />
    </SSignInContainer>
  );
}

export default SignIn;
