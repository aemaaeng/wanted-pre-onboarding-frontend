function AuthInput({ handleEmailInput, handlePasswordInput }) {
  return (
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
  );
}

export default AuthInput;
