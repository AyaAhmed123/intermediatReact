import { createBrowserRouter } from "react-router-dom";
import UserListPage from "./UserListPage";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/users", element: <UserListPage /> },
  { path: "/users/:id", element: <UserDetailPage /> },
  { path: "/contact", element: <ContactPage /> },
]);
export default router;
