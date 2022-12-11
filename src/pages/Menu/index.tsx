import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Search from './Search';
import { useState } from 'react';
import Filter from './Filter';

export default function Menu() {
    const [searchText, setSearchText] = useState<string>("");
    const [filter, setFilter] = useState<number | null>(null);

    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <header className={styles.header}>
                {/*Using CSS BEM Pattern*/}
                <div className={styles.header__text}>
                    My Lovely Cats
                </div>
            </header>
            <section className={styles.menu}>
                <h3 className={styles.menu__title}>Static Cats</h3>
                <Search searchText={searchText} setSearchText={setSearchText} />
                <div className={styles.menu__filter}>
                    <Filter filter={filter} setFilter={setFilter}/>
                </div>
            </section>
        </main>
    )
}