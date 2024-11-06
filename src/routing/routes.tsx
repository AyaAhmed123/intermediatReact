import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
import UserPage from "./UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "users",
        element: <UserPage />,
        children: [{ path: ":id", element: <UserDetailPage /> }],
      },

      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
export default router;
