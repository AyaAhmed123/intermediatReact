import React, { Dispatch } from "react";
import { AuthAction } from "./AuthProvider";

interface authContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}
const AuthContext = React.createContext<authContextType>({} as authContextType);
export default AuthContext;
