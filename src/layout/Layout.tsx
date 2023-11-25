import MainMenu from "../components/Menu/MainMenu/MainMenu";
import ExtraMenu from "../components/Menu/ExtraMenu/ExtraMenu";

import s from "./Layout.module.scss"
import Home from "../pages/Home";
import Footer from "../components/Footer/Footer";

const Layout = () => {
    return (
        <div className={s.container}>
            <div className={s.header}>
                <MainMenu />
                <ExtraMenu />
            </div>
            <Home />
            <Footer />
        </div>
    )
}

export default Layout;