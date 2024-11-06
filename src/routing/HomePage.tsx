import { error } from "console";
import { Link } from "react-router-dom";

const HomePage = () => {
  throw new Error("dcds");

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        mollitia!
      </p>
      <Link to={"/users"}>USers</Link>
    </>
  );
};

export default HomePage;
