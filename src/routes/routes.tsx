import DashboardLayout from "@/components/dashboard-layout";
import AddNintendo from "@/pages/add-nintendo";
import Nintendo from "@/pages/nintendo";
import { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate replace relative="route" to="nintendo" />,
      },
      {
        path: "/nintendo",
        children: [
          {
            index: true,
            element: <Nintendo />,
          },
          {
            path: "add",
            element: <AddNintendo />,
          },
        ],
      },
    ],
  },
];

export default routes;
