import { LoaderCircleIcon } from "lucide-react";
import styles from "./Spinner.module.css";

function Spinner() {
    return(
        <div id="spinner" className={styles["loader-container"]}>
            <div className={styles.spinner}>
                <LoaderCircleIcon width={64} height={64} />  
            </div>
        </div>
    )
}

export default Spinner;