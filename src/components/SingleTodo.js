function SingleTodo({ data }) {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{data.todo}</span>
      </label>
    </li>
  );
}

export default SingleTodo;
