import React, { FC } from 'react';
import scss from "./pages.module.scss";
import { LoginForm } from '@/components/auth/LoginForm';
import { RegisterForm } from '@/components/auth/RegisterForm';
type IProps = object

const RegisterPage: FC<IProps> = () => {
    return (

        <div className={scss.auth_container}>
            <RegisterForm />
        </div>
    );
};

export default RegisterPage;