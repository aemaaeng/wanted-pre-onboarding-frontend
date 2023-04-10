import { useState } from "react";
import styled from "styled-components";
import { authInstance } from "../util/api";
import { TodoButton } from "./Button";

const SSingleTodoContainer = styled.li`
  margin: 7px 0px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  width: 260px;

  span {
    margin-left: 3px;
  }

  button:last-child {
    background-color: var(--deepGreen);
    color: white;
    margin-left: 10px;
  }
`;

function SingleTodo({ data, handleTodoDelete }) {
  const [checked, setChecked] = useState(data.isCompleted);
  const id = data.id;

  const handleTodoCheck = () => {
    const updatedChecked = !checked;
    authInstance
      .put(`/todos/${id}`, {
        todo: data.todo,
        isCompleted: updatedChecked,
      })
      .then(() => setChecked(updatedChecked))
      .catch((err) => console.log(err));
  };

  return (
    <SSingleTodoContainer>
      <label>
        <input type="checkbox" checked={checked} onChange={handleTodoCheck} />
        <span>{data.todo}</span>
      </label>
      <div>
        <TodoButton text="수정" testId="modify-button" />
        <TodoButton
          text="삭제"
          testId="delete-button"
          onClick={() => handleTodoDelete(id)}
        />
      </div>
    </SSingleTodoContainer>
  );
}

export default SingleTodo;
