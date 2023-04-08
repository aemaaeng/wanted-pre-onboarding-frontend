import styled from "styled-components";

const SButton = styled.button`
  background-color: var(--limeGreen);
  font-size: 1.2rem;
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 12px 23px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: var(--green);
    transition: 0.3s;
  }
`;

function Button({ text }) {
  return <SButton>{text}</SButton>;
}

export default Button;
