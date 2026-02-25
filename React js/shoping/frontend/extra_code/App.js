// import Navbar from "./Component/Navbar";
// import F from "./Component/F";
// import M from "./Component/M";
// import Register from "./Component/Register";
// import Men from "./Component/Men";
// import Women from "./Component/Women";
// import Child from "./Component/Child";
// import Leaptop from "./Component/Leaptop";
// import Mobile from "./Component/Mobile";
// import Kitchan from "./Component/Kitchan";

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Outlet
// } from "react-router-dom";

// function App() {

//   const Layout = () => {
//     return (
//       <>
//         <Navbar />
//         <Outlet />
//         <F />
//       </>
//     );
//   };

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           index: true,
//           element: <M />,
//         },
//         {
//           path: "register",
//           element: <Register />,
//         },
//         {
//           path: "category/men",
//           element: <Men />,
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// }

// export default App;

// ======

import Navbar from "./Component/Navbar";
import F from "./Component/F";
import M from "./Component/M";
import Register from "./Component/Register";
import Men from "./Component/Men";
import Women from "./Component/Women";
import Child from "./Component/Child";
import Kitchan from "./Component/Kitchan";
import Leaptop from "./Component/Leaptop";
import Mobile from "./Component/Mobile";
import Cart from "./Component/Cart";
import ProductDetail from "./Component/ProductDetail";
import Order from "./Component/Order";

import Admin from "./Component/Admin";
import Admin_log from "./Component/Admin_log";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

function App() {

  // Layout WITH Navbar + Footer
  const MainLayout = () => {
    return (
      <>
        <Navbar /> {/* 👈 Navbar here */}
        <Outlet />
        <F />

      </>
    );
  };

  // Layout with ONLY Navbar (Register and Cart pages)
  const NavbarLayout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      // 🚀 MAIN LAYOUT (Normal website pages)
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <M /> },
        { path: "men", element: <Men /> },
        { path: "women", element: <Women /> },
        { path: "child", element: <Child /> },
        { path: "kitchan", element: <Kitchan /> },
        { path: "leaptop", element: <Leaptop /> },
        { path: "mobile", element: <Mobile /> },
        { path: "product/:id", element: <ProductDetail /> },
        // { path: "admin", element: <Admin /> }, // 👈 Admin panel (after login)
      ],
    },

    {
      path: "/admin_log",
      element: <NavbarLayout />, // Only Navbar
      children: [
        { index: true, element: <Admin_log /> }
      ],
    },


    // 📌 REGISTER PAGE (Only Navbar)
    {
      path: "/register",
      element: <NavbarLayout />,
      children: [{ index: true, element: <Register /> }],
    },

    // 🛒 CART PAGE (Only Navbar)

    {
      path: "/cart",
      element: <NavbarLayout />,
      children: [{ index: true, element: <Cart /> }],
    },

    {
      path: "/order",
      element: <NavbarLayout />, // Navbar only
      children: [{ index: true, element: <Order /> }],
    },
    {
      path: "/admin",
      element: <NavbarLayout />, // Navbar only
      children: [{ index: true, element: <Admin /> }],
    },

    


  ]);

  return <RouterProvider router={router} />;
}

export default App;
