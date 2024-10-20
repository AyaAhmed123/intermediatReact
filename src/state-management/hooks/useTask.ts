import React, { useContext } from "react";
import TaskContext from "../contexts/taskContext";

const useTask = () => {
  return useContext(TaskContext);
};

export default useTask;
