import { Routes,Route } from "react-router";

import { DashBoardView } from "../../views/DashBoardView";
import LogoutComponent from "../../components/auth/LogoutComponent/LogoutComponent";
import { HomeView } from "../../views/HomeView";
import { ProductsView } from "../../views/ProductsView";
import { PedidosView } from "../../views/PedidosView";
import { ClientesView } from "../../views/ClientesView";
import { CategoriasView } from "../../views/CategoriasView";


export default function index() {
  return (
    <Routes>
        <Route path="/" element={<DashBoardView />}>
          <Route index element={<HomeView />} />
          <Route path="/categories" element={<CategoriasView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/clients" element={<ClientesView />} />
          <Route path="/orders" element={<PedidosView />} />

        </Route>
        <Route path="/logout" element={<LogoutComponent />}></Route>
    </Routes>
  )
}
