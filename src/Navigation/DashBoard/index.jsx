import { Routes,Route } from "react-router";

import React from 'react'
import { DashBoardView } from "../../views/DashBoardView";

export default function index() {
  return (
    <Routes>
        <Route path="/" element={<DashBoardView />}></Route>
    </Routes>
  )
}
