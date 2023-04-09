import { useEffect, useState } from "react";
import styled from "styled-components";
import SingleTodo from "../components/SingleTodo";
import { authInstance } from "../util/api";

const SMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

function Todo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    authInstance
      .get("/todos", { headers: { "Content-Type": "application/json" } })
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <SMainContainer>
      <h1>Todos</h1>
      <div>Todo 등록하는 곳</div>
      <ul>
        {data.map((todo) => (
          <SingleTodo key={todo.id} data={todo} />
        ))}
      </ul>
    </SMainContainer>
  );
}

export default Todo;
