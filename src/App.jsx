import { useState } from "react";
import Home from "./pages/Home/Home";
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
      <Route index element={<Home />} />
      {/* <Route path="Route" element={<Route name />} /> */}
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
