import type { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router";

function Layout ({ children } : { children: ReactNode}) {
    const routes = ["/", "/movies", "/tv"];
    const { pathname } = useLocation();
    const showNavbar = routes.includes(pathname);


    return (
        <>
            {showNavbar && <Navbar/>}
            {children}
        </>
    )
}

export default Layout;