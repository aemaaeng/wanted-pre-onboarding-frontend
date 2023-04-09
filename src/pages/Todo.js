import styled from "styled-components";

const SMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

function Todo() {
  return (
    <SMainContainer>
      <h1>Todos</h1>
      <div>Todo가 보여질 곳</div>
    </SMainContainer>
  );
}

export default Todo;
