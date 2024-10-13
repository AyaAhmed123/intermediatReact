import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import { Todo } from "../hooks/useTodos";
interface ContextData {
  previousData: Todo[];
}
const TodoForm = () => {
  const queryClient = useQueryClient();
  const ref = useRef<HTMLInputElement>(null);
  const addTodo = useMutation<Todo, Error, Todo, ContextData>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    onMutate(clientTodo) {
      const previousData = queryClient.getQueryData<Todo[]>(["todos"]) || [];
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        clientTodo,
        ...(todos || []),
      ]);
      if (ref.current) ref.current.value = "";
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
  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current && ref.current.value)
            addTodo.mutate({
              userId: 1,
              completed: false,
              title: ref.current?.value,
              id: 0,
            });
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary" disabled={addTodo.isLoading}>
            {addTodo.isLoading ? "in progress" : "Add"} Add
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;