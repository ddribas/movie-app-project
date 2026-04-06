/**
 *  Left to Right
 * 
 *  Logged In:
 *  
 *  - User Avatar
 * 
 *  - User Name + welcome back
 * 
 *  - Settings menu
 * 
 * 
 *  Extra Developments:
 *  - setup simple login system with providers 
 * 
 */

import { ArrowLeft, CircleEllipsis } from "lucide-react";
import styles from './Navbar.module.css';
import { useLocation, useNavigate } from "react-router";

function Navbar() {
    const routes = ["/movies", "/series"];
    const { pathname } = useLocation();
    const showBackButton = routes.includes(pathname);
    const navigate = useNavigate();

    return(
        <nav className={styles.navbar}>
            <div className={styles['user-side']}>
                {showBackButton && <ArrowLeft onClick={() => navigate(-1)}/>}
                <div className={styles['img-container']}>
                   <img src="https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/96.jpg" alt="User Avatar" />
                </div>
                <div className={styles['text-container']}>
                   <p className={styles['welcome-text']}>Welcome Back</p>
                   <p  className={styles.username}>Gertudes Almeida</p>
                </div>
            </div>
            <div className={styles.icon}>
                <CircleEllipsis size={30} />
            </div>
        </nav>
    );
}

export default Navbar;