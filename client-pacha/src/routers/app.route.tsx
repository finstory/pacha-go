import { BrowserRouter, HashRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import { MainRoute } from "./main.route";
import { MainLayout } from "@/layouts/main/main.layout";
import { useState } from "react";
import ProtectedRoute from "@/components/auth/ProtectedStack";
import { AuthRoute } from "./auth.route";
export const AppRoute = () => {

    const [isLogged, setIsLogged] = useState(false);
    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRoute />} />
            {/* <Route index element={<MainLayout children={<LandingPage />} />} /> */}
            <Route path="/*" element={
                <ProtectedRoute isAuthenticated={isLogged}>
                    <MainRoute />
                </ProtectedRoute>
            } />
        </Routes>
    );
};