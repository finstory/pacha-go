
import { Route, Routes, HashRouter } from "react-router-dom";
import { useState } from "react";
import LoginPage from "@/pages/LoginPage";
import { MainLayout } from "@/layouts/main/main.layout";
import { ModeToggle } from "@/components/mode-toggle";
import RegisterPage from "@/pages/RegisterPage";


export const AuthRoute = () => {

    return (
        <>
            <div className='absolute top-[2%] right-[2%]'> <ModeToggle /></div>
            <MainLayout>

                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/sign_up" element={<RegisterPage />} />
                </Routes>
            </MainLayout>
        </>

    );
};
