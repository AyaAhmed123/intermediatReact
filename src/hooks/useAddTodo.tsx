import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CASH_TODO_KEY } from "../react-query/constatnt";
import todoService, { Todo } from "../services/todoService";

interface ContextData {
  previousData: Todo[];
}
const useAddTodo = (addTodo: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, ContextData>({
    mutationFn: todoService.add,
    onMutate(clientTodo) {
      const previousData =
        queryClient.getQueryData<Todo[]>(CASH_TODO_KEY) || [];
      queryClient.setQueryData<Todo[]>(CASH_TODO_KEY, (todos = []) => [
        clientTodo,
        ...todos,
      ]);
      addTodo();
      return { previousData };
    },
    onSuccess(getFromServer, sendToServer, context) {
      console.log(getFromServer, sendToServer, context, queryClient);
      // queryClient.invalidateQueries({ queryKey: CASH_TODO_KEY });
      queryClient.setQueryData<Todo[]>(CASH_TODO_KEY, (todos) =>
        todos?.map((todo) => (todo == sendToServer ? getFromServer : todo))
      );
    },
    onError(error, sendToServer, context) {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(CASH_TODO_KEY, context.previousData);
    },
  });
};

export default useAddTodo;
