import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import styled from "styled-components";

const SMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

function Main() {
  return (
    <SMainContainer>
      <Link to="/">
        <h1>TODO</h1>
      </Link>
      <SButtonContainer>
        <Link to="/signup">
          <Button text="회원가입" />
        </Link>
        <Link to="/login">
          <Button text="로그인" />
        </Link>
      </SButtonContainer>
    </SMainContainer>
  );
}

export default Main;
