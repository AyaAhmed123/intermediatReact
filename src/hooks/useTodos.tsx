import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}
interface pageQuery {
  page: number;
  pageSize: number;
}
const useTodos = (query: pageQuery) => {
  const fetchData = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos", {
        params: {
          _start: (query.page - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);
  return useQuery<Todo[], Error>({
    queryKey: ["todos", query],
    queryFn: fetchData,

    staleTime: 1 * 60 * 1000,
    // to do not make reload and not go to top of page when click on next and previous
    keepPreviousData: true,
  });
};

export default useTodos;
