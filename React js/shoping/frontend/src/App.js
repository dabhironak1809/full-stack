import Navbar from "./Component/Navbar";
import F from "./Component/F";
import M from "./Component/M";

import Register from "./Component/Register";
import Login from "./Component/Login";

import Men from "./Catogory/Men";
import Women from "./Catogory/Women";
import Child from "./Catogory/Child";
import Kitchan from "./Catogory/Kitchan";
import Leaptop from "./Catogory/Leaptop";
import Mobile from "./Catogory/Mobile";

import Cart from "./Component/Cart";
import ProductDetail from "./Component/ProductDetail";
import Order from "./Component/Order";

import Admin from "./Admin_layout/Admin";
// import Admin_log from "./Component/Admin_log";
// import AdminProducts from "./Component/AdminProducts";
import AdminProducts from "./Admin_layout/AdminProducts";
import AdminOrders from "./Admin_layout/AdminOrders";
import AdminDashboard from "./Admin_layout/AdminDashboard";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

function App() {

  // Layout WITH Navbar + Footer (Default Website Pages)
  const MainLayout = () => (
    <>
      <Navbar />
      <Outlet />
      <F />
    </>
  );

  // Layout with ONLY Navbar (Login, Register, Cart etc.)
  const NavbarLayout = () => (
    <>
      <Navbar />
      <Outlet />
    </>
  );

  const router = createBrowserRouter([
    
    // =======================
    // MAIN WEBSITE PAGES
    // =======================
    {
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
        
      ],
    },
    
    // =======================
    // USER PAGES (Only Navbar)
    // =======================
    {
      path: "/register",
      element: <NavbarLayout />,
      children: [{ index: true, element: <Register /> }],
    },
    {
      path: "/login",
      element: <NavbarLayout />,
      children: [{ index: true, element: <Login /> }],
    },
    // {
      //   path: "/cart",
      //   element: <NavbarLayout />,
      //   children: [{ index: true, element: <Cart /> }],
      // },
      // { path: "Product_Detail/:id", element: <ProductDetail /> },
    {
      path:"/Product_Detail/:id",
      element:<NavbarLayout/>,
      children:[{index:true ,element : <ProductDetail/>}]
    },
    {
      path: "/order",
      element: <NavbarLayout />,
      children: [{ index: true, element: <Order /> }],
    },
    {
      path: "/cart",
      element: <NavbarLayout />,
      children: [{ index: true, element: <Cart/> }],
    },

    // =======================
    // ADMIN LOGIN (Only Navbar)
    // =======================
    // {
    //   path: "/admin_log",
    //   element: <NavbarLayout />,
    //   children: [{ index: true, element: <Admin_log /> }],
    // },

    // =======================
    // ADMIN PANEL (ONLY AFTER LOGIN)
    // =======================
    {
      path: "/admin",
      element: <NavbarLayout />,
      children: [{ index: true, element: <Admin /> }],
    },
    {
      path: "/adminproducts",
      element: <NavbarLayout />,
      children: [{ index: true, element: <AdminProducts /> }],
    },
    {
      path: "/AdminOrders",
      element: <NavbarLayout />,
      children: [{ index: true, element: <AdminOrders /> }],
    },
    {
      path: "/AdminDashboard",
      element: <NavbarLayout />,
      children: [{ index: true, element: <AdminDashboard /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
