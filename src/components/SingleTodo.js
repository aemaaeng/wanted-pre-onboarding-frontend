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
  min-width: 260px;

  span {
    margin-left: 3px;
  }

  input {
    margin-right: 8px;
    height: 25px;
    font-size: 1rem;
    border: none;
    padding: 5px 5px;
  }

  input:focus {
    outline: none;
    border-color: var(--green);
    box-shadow: 0 0 10px var(--green);
  }

  label {
    display: flex;
    align-items: center;
  }

  button:last-child {
    background-color: var(--deepGreen);
    color: white;
    margin-left: 10px;
  }
`;

function SingleTodo({ data, handleTodoDelete }) {
  const [checked, setChecked] = useState(data.isCompleted);
  const [isEditMode, setIsEditMode] = useState(false);
  const [todoInput, setTodoInput] = useState(data.todo);
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
        {isEditMode ? (
          <input
            data-testid="modify-input"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
        ) : (
          <span>{data.todo}</span>
        )}
      </label>
      {isEditMode ? (
        <div>
          <TodoButton
            text="제출"
            testId="submit-button"
            // onClick={() => setIsEditMode(true)}
          />
          <TodoButton
            text="취소"
            testId="cancel-button"
            // onClick={() => handleTodoDelete(id)}
          />
        </div>
      ) : (
        <div>
          <TodoButton
            text="수정"
            testId="modify-button"
            onClick={() => setIsEditMode(true)}
          />
          <TodoButton
            text="삭제"
            testId="delete-button"
            onClick={() => handleTodoDelete(id)}
          />
        </div>
      )}
    </SSingleTodoContainer>
  );
}

export default SingleTodo;
