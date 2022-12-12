import cats from './cats.json';
import Cat from './Cat';
import styles from './Cats.module.scss';

export default function Cats() {
    return (
        <div className={styles.cats}>
            {cats.map(cat => (
                <Cat 
                    key={cat.id}
                    {...cat}/>
            ))}
        </div>
    )
}