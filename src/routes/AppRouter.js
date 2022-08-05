import React from "react";
import { Routes, Route } from "react-router-dom";
import { PagesLayout } from "../pages";
import Dashboard from "../pages/dashboard/Dashboard";

const AppRouter = () => {
  // console.log("asd");
  return (
    <Routes>
      <Route path="/" element={<PagesLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
