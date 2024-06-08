import { useState } from "react";
import Home from "./pages/Home/Home";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import SellersReg from "./pages/auth/SellersReg";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {" "}
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="/auth/Signin" element={<Signin />} />
        <Route path="/auth/Signup" element={<Signup />} />
        <Route path="/auth/Sellers" element={<SellersReg />} />
      </Route>
    </>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
