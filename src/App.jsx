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
import ProductProvider from "./components/Sellers/ProductContext";
import Transactions from "./pages/Sellers/Transactions";
import EmailVerification from "./pages/auth/buyersAuth/EmailVerification";
import ForgotPassword from "./pages/auth/buyersAuth/ForgotPassword";
import OTPVerification from "./pages/auth/buyersAuth/OTPVerification";
import ChangePassword from "./pages/auth/buyersAuth/ChangePasword";
import Analytic from "./pages/Sellers/Analytics";
import Profile from "./pages/Sellers/Profile";
import ProfileIndex from "./pages/auth/profileAuth/ProfileIndex";
import ProfileLayout from "./layouts/ProfileLayout";
import SellersLogin from "./pages/auth/sellerAuth/SellersLogin";
import SellersSignup from "./pages/auth/sellerAuth/SellersSignup";
import SellerVerfication from "./pages/auth/sellerAuth/SellerVerification";
import SellerForgotPassword from "./pages/auth/sellerAuth/SellerForgotPassword";
import SellerOTP from "./pages/auth/sellerAuth/SellerOTP";
import SellerChangePassword from "./pages/auth/sellerAuth/SellerChangePassword";

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
        <Route path="seller-login" element={<SellersLogin />} />
        <Route path="seller-forgot-password" element={<SellerForgotPassword />} />
        <Route path="seller-signup" element={<SellersSignup />} />
        <Route path="seller-otp" element={<SellerOTP />} />
        <Route path="seller-verification" element={<SellerVerfication />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="seller-change-password" element={<SellerChangePassword />} />
        <Route path="otp-verification" element={<OTPVerification />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Route>
      <Route path="auth/profile" element={<ProfileLayout />}>
        <Route path="index" element={<ProfileIndex />} />
      </Route>
      <Route path="sellers" element={<SellersLayout />}>
        <Route path="dashboard" element={<SellersDashboard />} />
        <Route path="track" element={<TrackOrder />} />
        <Route path="product" element={<Product />} />
        <Route path="transaction" element={<Transactions />} />
        <Route path="analytics" element={<Analytic />} />
        <Route path="profile" element={<Profile />} />
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
