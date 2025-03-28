
import scss from "./main.module.scss";

interface Props {
    children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {


    return (

        <main className={scss.main_container}>{children}</main>

    )
}
