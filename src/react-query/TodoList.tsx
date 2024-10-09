import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useTodos from "../hooks/useTodos";
import React, { useState } from "react";

const TodoList = () => {
  const [pageSize, setpageSize] = useState(10);
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    useTodos({ pageSize });
  console.log(data);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data.pages?.map((page: any, index) => (
          <React.Fragment key={index}>
            {page.map((todo: any) => (
              <li key={todo.id} className="list-group-item">
                {todo.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button
        className="btn btn-primary my-3 ms-1"
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "loading" : "load more"}
      </button>
    </>
  );
};

export default TodoList;
