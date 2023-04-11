import { useState } from "react";
import styled from "styled-components";
import { authInstance } from "../util/api";
import { TodoButton } from "./Button";

const SSingleTodoContainer = styled.li`
  margin: 7px 0px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  min-width: 260px;

  span {
    margin-left: 3px;
  }

  input[type="checkbox"] {
    transform: scale(1.5);
    margin-right: 8px;
  }

  input[data-testid="modify-input"] {
    margin-left: 3px;
    width: 140px;
    height: 25px;
    font-size: 1.1rem;
    border: none;
    padding: 5px 5px;

    &:focus {
      outline: none;
      border-color: var(--green);
      box-shadow: 0 0 10px var(--green);
    }
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
  const [currentTodo, setCurrentTodo] = useState(data.todo);
  const [todoInput, setTodoInput] = useState(currentTodo);
  const id = data.id;

  const handleTodoCheck = () => {
    const updatedChecked = !checked;
    authInstance
      .put(`/todos/${id}`, {
        todo: currentTodo,
        isCompleted: updatedChecked,
      })
      .then(() => setChecked(updatedChecked))
      .catch((err) => console.log(err));
  };

  const handleTodoInput = (e) => {
    setTodoInput(e.target.value);
  };

  const handleTodoUpdate = () => {
    authInstance
      .put(
        `todos/${id}`,
        { todo: todoInput, isCompleted: data.isCompleted },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        setIsEditMode(false);
        setCurrentTodo(res.data.todo);
        setTodoInput(res.data.todo);
      })
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
            onChange={handleTodoInput}
          />
        ) : (
          <span>{currentTodo}</span>
        )}
      </label>
      {isEditMode ? (
        <div>
          <TodoButton
            text="제출"
            testId="submit-button"
            onClick={handleTodoUpdate}
          />
          <TodoButton
            text="취소"
            testId="cancel-button"
            onClick={() => {
              setIsEditMode(false);
              setTodoInput(currentTodo);
            }}
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
