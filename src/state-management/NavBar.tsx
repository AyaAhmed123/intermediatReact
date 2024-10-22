import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import TaskContext from "./tasks/taskContext";
import useStoreCounter from "./counter/store";

const NavBar = () => {
  const { tasks } = useContext(TaskContext);
  const counter = useStoreCounter((s) => s.counter);
  console.log("render");
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">counter :{counter}</span>
      <span className="badge text-bg-secondary">tasks: {tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
