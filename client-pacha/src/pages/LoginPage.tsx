import React, { FC } from 'react';
import scss from "./pages.module.scss";
import { LoginForm } from '@/components/auth/LoginForm';
import { RegisterForm } from '@/components/auth/RegisterForm';
type IProps = object

const LoginPage: FC<IProps> = () => {
    return (

        <div className={scss.auth_container}>
         <LoginForm /> 

        </div>
    );
};

export default LoginPage;