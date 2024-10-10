import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import { Todo } from "../hooks/useTodos";

const TodoForm = () => {
  const queryClient = useQueryClient();
  const ref = useRef<HTMLInputElement>(null);
  const addTodo = useMutation({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    onSuccess(getFromServer, sendToServer, context) {
      console.log(getFromServer, sendToServer, context, queryClient);
      // queryClient.invalidateQueries({ queryKey: ["todos"] });
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        getFromServer,
        ...(todos || []),
      ]);
    },
  });
  return (
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
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
