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

import { TableOfContents } from "lucide-react";
import styles from './Navbar.module.css';

function Navbar() {

    return(
        <nav>
            <div>
                <div className={styles['img-container']}>
                   <img src="https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/96.jpg" alt="User Avatar" />
                </div>
                <div>
                   <p>Welcome Back</p>
                   <p>Gertudres Almeida</p>
                </div>
            </div>
            <div>
                <TableOfContents />
            </div>
        </nav>
    );
}

export default Navbar;