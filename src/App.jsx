import React from "react";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import SellersLayout from "./layouts/SellersLayout";
import Home from "./pages/Home/Home";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import SellersReg from "./pages/auth/SellersReg";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import AppCart from "./pages/ProductDetails/AppCart";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import SellersDashboard from "./pages/Sellers/SellersDashboard";
import TrackOrder from "./pages/Sellers/TrackOrder";
import Product from "./pages/Sellers/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {" "}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="product-details" element={<ProductDetails />} />
        <Route path="cart" element={<AppCart />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="Signin" element={<Signin />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Sellers" element={<SellersReg />} />
      </Route>
      <Route path="sellers" element={<SellersLayout />}>
        <Route path="dashboard" element={<SellersDashboard />} />
        <Route path="track" element={<TrackOrder />} />
        <Route path="product" element={<Product />} />
      </Route>
    </>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
