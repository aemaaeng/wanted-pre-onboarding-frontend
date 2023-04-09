import { useEffect, useState } from "react";
import styled from "styled-components";
import SingleTodo from "../components/SingleTodo";
import { TodoButton } from "../components/Button";
import { authInstance } from "../util/api";

const SMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  #newTodo {
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
  }
`;

function Todo() {
  const [data, setData] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    authInstance
      .get("/todos", { headers: { "Content-Type": "application/json" } })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleTodoChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleTodoSubmit = () => {
    authInstance
      .post(
        "/todos",
        { todo: todoInput },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => setData([...data, res.data]))
      .catch((err) => console.log(err));
  };

  return (
    <SMainContainer>
      <h1>Todos</h1>
      <div id="newTodo">
        <input
          data-testid="new-todo-input"
          onChange={(e) => handleTodoChange(e)}
        />
        <TodoButton
          testId="new-todo-add-button"
          text="추가"
          onClick={handleTodoSubmit}
        />
      </div>
      <ul>
        {data.map((todo) => (
          <SingleTodo key={todo.id} data={todo} />
        ))}
      </ul>
    </SMainContainer>
  );
}

export default Todo;
