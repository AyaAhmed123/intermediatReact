import React, { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";
interface Props {
  children: ReactNode;
}
interface LoginAction {
  type: "LOGIN";
  username: string;
}
interface LogoutAction {
  type: "LOGOUT";
}
export type AuthAction = LoginAction | LogoutAction;
const authReducer = (state: string, action: AuthAction) => {
  if (action.type == "LOGIN") return action.username;
  if (action.type == "LOGOUT") return "";
  return state;
};

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
