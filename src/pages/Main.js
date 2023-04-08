import { Link } from "react-router-dom";
import Button from "../components/Button";
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
          <Button text="sign up" />
        </Link>
        <Link to="/login">
          <Button text="login" />
        </Link>
      </SButtonContainer>
    </SMainContainer>
  );
}

export default Main;
