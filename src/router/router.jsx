/* eslint-disable */
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import LoginPage from "../pages/LoginPage/LoginPage";
import CadastroUsuarioPage from "../pages/CadastroUsuarioPage/CadastroUsuarioPage";
import ErroPage from "../pages/ErroPage/ErroPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import ListaDespesasPage from "../pages/ListaDespesasPage/ListaDespesasPage";
import CadastroDespesaPage from "../pages/CadastroDespesaPage/CadastroDespesaPage";

const isAuthenticated = localStorage.getItem("usuarioLogado") !== null;

const PrivateRoute = ({ children }) => {
 return isAuthenticated ? children : <LoginPage />;
};

const routers = createBrowserRouter([
 {
  path: "/",
  element: <LoginPage />
 },
 {
  path: "/cadastroUsuario",
  element: <CadastroUsuarioPage />
 },
 {
  path: "/",
  element: <App />,
  errorElement: <ErroPage />,
  children: [
   {
    path: "/dashboard",
    element: (
     <PrivateRoute>
      <DashboardPage />
     </PrivateRoute>
    )
   },
   {
    path: "/despesas",
    element: (
     <PrivateRoute>
      <ListaDespesasPage />
     </PrivateRoute>
    )
   },
   {
    path: "/novaDespesa",
    element: (
     <PrivateRoute>
      <CadastroDespesaPage />
     </PrivateRoute>
    )
   }
  ]
 }
]);

export default routers;
