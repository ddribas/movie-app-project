import { Filter, Search } from "lucide-react";

function Searchbar () {
    return (
        <section>
            <div>
                <Search />
            </div>
            <input />
            <div>
                <Filter />
            </div>
        </section>
    );
}

export default Searchbar;