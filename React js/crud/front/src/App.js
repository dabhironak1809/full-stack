import Home from "./Controllers/Home";
import Header from "./Controllers/Header";
import Footer from "./Controllers/Footer";
import Sidebar from "./Controllers/Sidebar";

import Table_student from "./Controllers/Table_student";
import Add_student from "./Controllers/Add_student";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <>
        <Header />
        <Sidebar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/Home",
          element: <Home />
        },
        {
          path: "/Table_student",
          element: <Table_student />
        },
        {
          path: "/Add_student",
          element: <Add_student />
        },
        {
          path: "/Add_student/:id",
          element: <Add_student />
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
