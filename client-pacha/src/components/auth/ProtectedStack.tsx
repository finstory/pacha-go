// ProtectedStack.tsx
import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
interface ProtectedRouteProps {
    isAuthenticated: boolean;
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, children }) => {

    if (!isAuthenticated) {
        return <Navigate to="/auth/login" />
    }
    else return (
        <>
            {children}
        </>
    );
};

export default ProtectedRoute;
