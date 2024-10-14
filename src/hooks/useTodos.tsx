import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CASH_TODO_KEY } from "../react-query/constatnt";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const fetchData = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos", {})
      .then((res) => res.data);
  return useQuery<Todo[], Error>({
    queryKey: CASH_TODO_KEY,
    queryFn: fetchData,

    staleTime: 1 * 60 * 1000,
    // to do not make reload and not go to top of page when click on next and previous
    keepPreviousData: true,
  });
};

export default useTodos;
