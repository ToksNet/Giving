import { useState } from "react";
import Home from "./pages/Home/Home";
import Signin from "./pages/auth/Signin";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      {/* <Route path="Route" element={<Route name />} /> */}
    </Route>
    // <Route path="Signin" element={<Signin />} />
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
