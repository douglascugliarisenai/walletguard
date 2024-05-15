/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./router/router";
import { UsuariosContextProvider } from "./context/UsuarioContext";
import { DespesaContextProvider } from "./context/DespesaContext";

ReactDOM.createRoot(document.getElementById("root")).render(
 <UsuariosContextProvider>
  <DespesaContextProvider>
   <RouterProvider router={routers}></RouterProvider>
  </DespesaContextProvider>
 </UsuariosContextProvider>
);
