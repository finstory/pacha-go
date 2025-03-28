
import React from 'react'
import scss from './main-layout.module.scss'

export const MainLayout = ({ children }) => {


    return (
        <div className={scss.main_layout}>

            {children}
        </div>
    )
}
