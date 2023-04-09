import styled from "styled-components";

const SButton = styled.button`
  background-color: var(--limeGreen);
  font-size: 1.1rem;
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 12px 23px;
  font-weight: 600;

  &:hover:enabled {
    cursor: pointer;
    background-color: var(--green);
    transition: 0.3s;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const SSubmitButton = styled(SButton)`
  font-size: 1rem;
  padding: 10px 20px;
`;

function Button({ text }) {
  return <SButton>{text}</SButton>;
}

function SubmitButton({ text, isAvailable, onClick, testId }) {
  return (
    <SSubmitButton
      data-testid={testId}
      disabled={isAvailable ? false : true}
      onClick={onClick}
    >
      {text}
    </SSubmitButton>
  );
}

export { Button, SubmitButton };
