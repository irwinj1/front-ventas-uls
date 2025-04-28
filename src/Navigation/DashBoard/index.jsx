import { Routes,Route } from "react-router";

import React from 'react'
import { DashBoardView } from "../../views/DashBoardView";
import LogoutComponent from "../../components/auth/LogoutComponent/LogoutComponent";
import { HomeView } from "../../views/HomeView";


export default function index() {
  return (
    <Routes>
        <Route path="/" element={<DashBoardView />}>
          <Route index element={<HomeView />} />
        </Route>
        <Route path="/logout" element={<LogoutComponent />}></Route>
    </Routes>
  )
}
