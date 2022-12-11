import filters from './filters.json';
import styles from './Filter.module.scss';
import React from 'react';

//Creating simpler types. Works well when pulling from a static file.
type IOption = typeof filters[0];

interface Props {
    filter: number | null;
    setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filter({ filter, setFilter}: Props) {

    function selectFilter(option: IOption) {
        return setFilter(option.id);
    }

    return (
        //TODO: Study why this map uses () inside function and how the behavior differs from one symbol to another.
        <div className={styles.filters}>
            {filters.map((option) => (
                <button
                    className={`${styles.filters__filter} ${filter === option.id ? styles["filters__filter--active"] : ""}`}
                    key={option.id}
                    onClick={() => selectFilter(option)}>
                    {option.label}
                </button>
            ))}
        </div>
    )
}