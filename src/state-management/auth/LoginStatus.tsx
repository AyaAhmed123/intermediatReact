import useStoreAuth from "./store";

const LoginStatus = () => {
  const { user, login, logout } = useStoreAuth();
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login("Hello ayuya")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
