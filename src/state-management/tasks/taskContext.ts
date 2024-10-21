import React, { createContext } from "react";
import { Dispatch } from "react";
import { Task } from "./TaskProvider";
import { TaskAction } from "./TaskProvider";
interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}
const TaskContext = React.createContext<TaskContextType>({} as TaskContextType);
export default TaskContext;
