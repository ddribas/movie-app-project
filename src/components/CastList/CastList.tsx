import Avatar from '../Avatar/Avatar';
import styles from './CastList.module.css';
import type { Cast, Crew } from "@/types/generic";

interface list {
    title: string;
    data: Crew[] | Cast[];
}

function CastList ({ title, data } : list) {
    return (
        <section className={styles.listSection}>
            <div className={styles.listHeader}>
                <h2>{title}</h2>
            </div>
            <div className={styles.listColumn}>
                {data.map((person, index) => {
                    return <Avatar key={index} name={person.name} avatar={(person.profile_path) ? person.profile_path : ""} />
                } )}
            </div>
        </section>
    );
}

export default CastList;