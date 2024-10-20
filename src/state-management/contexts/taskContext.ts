import React, { createContext } from "react";
import { Dispatch } from "react";
import { Task } from "../Reducer/taskReducer";
import { TaskAction } from "../Reducer/taskReducer";
interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}
const TaskContext = React.createContext<TaskContextType>({} as TaskContextType);
export default TaskContext;
