import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "./useTodos";
interface ContextData {
  previousData: Todo[];
}
const useAddTodo = (addTodo: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, ContextData>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    onMutate(clientTodo) {
      const previousData = queryClient.getQueryData<Todo[]>(["todos"]) || [];
      queryClient.setQueryData<Todo[]>(["todos"], (todos = []) => [
        clientTodo,
        ...todos,
      ]);
      addTodo();
      return { previousData };
    },
    onSuccess(getFromServer, sendToServer, context) {
      console.log(getFromServer, sendToServer, context, queryClient);
      // queryClient.invalidateQueries({ queryKey: ["todos"] });
      queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
        todos?.map((todo) => (todo == sendToServer ? getFromServer : todo))
      );
    },
    onError(error, sendToServer, context) {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(["todos"], context.previousData);
    },
  });
};

export default useAddTodo;
