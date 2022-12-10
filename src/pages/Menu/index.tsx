import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

export default function Menu() {
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
        </main>
    )
}