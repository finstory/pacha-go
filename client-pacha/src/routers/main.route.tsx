
import { MainLayout } from "@/layouts/main/main.layout";
import DashboardPage from "@/pages/DashboardPage";
import LoginPage from "@/pages/LoginPage";
import { Route, Routes, HashRouter, useNavigate } from "react-router-dom";

export const MainRoute = () => {


  return (

    <MainLayout>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </MainLayout>
  );
};
