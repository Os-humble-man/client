import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Enregistrement from "./components/Enregistrement";
import Home from "./components/Home";
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/add"}>Ajouter</Link>
        </div>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/add",
          element: <Enregistrement />,
        },
      ],
    },
  ]);
  return (
    <>
      <Enregistrement />
      <Home />
    </>
  );
}

export default App;
