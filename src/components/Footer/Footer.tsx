import type { ReactNode } from "react";
import styles from './Footer.module.css';

function Footer ({children}: {children: ReactNode}) {
    const date = new Date();
    
    return (<>
        {children}
        <div className={styles.footer}>Copyright© {date.getFullYear()}</div>
    </>)
}

export default Footer;