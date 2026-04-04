import { Filter, Search } from "lucide-react";
import styles from './Searchbar.module.css';

function Searchbar () {
    return (
        <section className={styles.searchSection}>
            <div className={styles.searchBar}>
                <div>
                    <Search />
                </div>
                <input type="text" placeholder="Search" />
                <div>
                    <Filter />
                </div>
            </div>
        </section>
    );
}

export default Searchbar;