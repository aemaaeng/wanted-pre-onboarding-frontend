import { useState } from "react";
import styled from "styled-components";
import { authInstance } from "../util/api";

const SSingleTodoContainer = styled.li`
  margin: 7px 0px;
  font-size: 1.1rem;

  span {
    margin-left: 3px;
  }
`;

function SingleTodo({ data }) {
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
    </SSingleTodoContainer>
  );
}

export default SingleTodo;
