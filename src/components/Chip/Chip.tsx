import type { ReactNode } from "react";
import styles from "./Chip.module.css";

interface IChip {
    variant: "primary" | "secondary" | "selected",
    state: "active" | "inactive"
    children: ReactNode
}


function Chip ({ variant, state, children }: IChip) {

    return (
        <div className={`${styles.chip} ${styles[state]} ${styles[variant]}`} >
            {children}
        </div>
    )
}

export default Chip;