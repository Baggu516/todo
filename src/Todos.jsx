import { memo, useRef } from "react";

const Todos = ({ todos, addTodo }) => {
  const r=useRef()
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return (
        <>
        <input type="checkbox"  ref={r} onClick={(e)=>console.log(e.target.checked)}/>
        <p key={index}>{todo}</p>;
        </>
        )
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);