import { Task } from "../TaskList";

interface AddTask {
  type: "ADD";
  task: Task;
}
interface DeleteTask {
  type: "DELETE";
  taskId: number;
}

type Action = AddTask | DeleteTask;
const taskReducer = (tasks: Task[], action: Action) => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
  }
};

export default taskReducer;
