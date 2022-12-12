import logo from "assets/logo.svg";
import styles from './Cat.module.scss';
import cats from '../cats.json';

type Props = typeof cats[0];

export default function Cat(props: Props) {
    const {affect,age,bio,category,name,photo,weight,lazy} = props;
    return (
        <div className={styles.cat}>
            <div className={styles.cat__image}>
                <img src={logo} alt={name} />
            </div>
            <div className={styles.cat__description}>
                <div className={styles.cat__title}>
                    <h2> {name} </h2>
                    <p> {bio} </p>
                </div>
                <div className={styles.cat__tags}>
                    <div className={styles.cat__type}>{weight}</div>
                    <div className={styles.cat__lazy}>{lazy}</div>
                    <div className={styles.cat__affect}>{affect}</div>
                    <div className={styles.cat__age}>{age}</div>
                </div>
            </div>
        </div>
    );
}