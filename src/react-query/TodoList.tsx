import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useTodos from "../hooks/useTodos";
import { useState } from "react";

const TodoList = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setpageSize] = useState(10);
  const { data: todos, error, isLoading } = useTodos({ page, pageSize });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {todos?.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.title}
          </li>
        ))}
      </ul>
      <button
        className="btn btn-primary my-3 ms-1"
        disabled={page == 1}
        onClick={() => setPage(page - 1)}
      >
        previous
      </button>
      <button
        className="btn btn-primary my-3 ms-1"
        onClick={() => setPage(page + 1)}
      >
        next
      </button>
    </>
  );
};

export default TodoList;
