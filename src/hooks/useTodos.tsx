import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}
interface pageQuery {
  pageSize: number;
}
const useTodos = (query: pageQuery) => {
  const fetchData = ({ pageParam = 1 }) =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos", {
        params: {
          _start: (pageParam - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);
  return useInfiniteQuery<Todo[], Error>({
    queryKey: ["todos", query],
    queryFn: fetchData,

    staleTime: 1 * 60 * 1000,
    // to do not make reload and not go to top of page when click on next and previous
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export default useTodos;
