import { useQuery } from "@tanstack/react-query";
import { CASH_TODO_KEY } from "../react-query/constatnt";
import todoService from "../services/todoService";
import { Todo } from "../services/todoService";

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CASH_TODO_KEY,
    queryFn: todoService.getAll,

    staleTime: 1 * 60 * 1000,
    // to do not make reload and not go to top of page when click on next and previous
    keepPreviousData: true,
  });
};

export default useTodos;
