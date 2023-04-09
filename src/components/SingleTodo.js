import styled from "styled-components";

const SSingleTodoContainer = styled.li`
  margin: 7px 0px;
  font-size: 1.1rem;

  span {
    margin-left: 3px;
  }
`;

function SingleTodo({ data }) {
  return (
    <SSingleTodoContainer>
      <label>
        <input type="checkbox" />
        <span>{data.todo}</span>
      </label>
    </SSingleTodoContainer>
  );
}

export default SingleTodo;
