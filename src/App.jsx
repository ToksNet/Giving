import React from "react";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import SellersLayout from "./layouts/SellersLayout";
import Index from "./pages/Home/Index";
import Signin from "./pages/auth/buyersAuth/Signin";
import Signup from "./pages/auth/buyersAuth/Signup";
import ProductDetails from "./pages/Home/ProductDetails";
import Cart from "./pages/Home/Cart";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import SellersDashboard from "./pages/Sellers/SellersDashboard";
import TrackOrder from "./pages/Sellers/TrackOrder";
import Product from "./pages/Sellers/Product";
import Orders from "./components/Sellers/orders";
import Delivered from "./components/Sellers/delivered";
import Pending from "./components/Sellers/pending";
import Cancelled from "./components/Sellers/cancelled";
import ProductProvider from "./components/Sellers/ProductContext";
import Transactions from "./pages/Sellers/Transactions";
import EmailVerification from "./pages/auth/buyersAuth/EmailVerification";
import ForgotPassword from "./pages/auth/buyersAuth/ForgotPassword";
import OTPVerification from "./pages/auth/buyersAuth/OTPVerification";
import ChangePassword from "./pages/auth/buyersAuth/ChangePasword";



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<Index />} />
        <Route path="product-details/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="Signin" element={<Signin />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="email-verification" element={<EmailVerification />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="otp-verification" element={<OTPVerification />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Route>
      <Route path="sellers" element={<SellersLayout />}>
        <Route path="dashboard" element={<SellersDashboard />} />
        <Route path="track" element={<TrackOrder />} />
        <Route path="product" element={<Product />} />
        <Route path="transaction" element={<Transactions />} />
        <Route path="orders" element={<Orders />} />
        <Route path="delivered" element={<Delivered />} />
        <Route path="pending" element={<Pending />} />
        <Route path="cancelled" element={<Cancelled />} />
      </Route>
    </>
  )
);
const App = () => {
  return (
    <ProductProvider>
      <RouterProvider router={router} />;
    </ProductProvider>
  );
};
export default App;
