import React from 'react';
import filters from './filters.json';
import styles from './Filter.module.scss';
import classNames from 'classnames';

//Creating simpler types. Works well when pulling from a static file.
type IOption = typeof filters[0];

interface Props {
    filter: number | null;
    setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filter({ filter, setFilter }: Props) {

    function selectFilter(option: IOption) {
        if (filter === option.id) {
            return setFilter(null);
        }

        return setFilter(option.id);
    }

    return (
        //TODO: Study why this map uses () inside function and how the behavior differs from one symbol to another.
        <div className={styles.filters}>
            {filters.map((option) => (
                //TODO: Study on classNames dependency and write about it.
                <button
                    
                    className={classNames({
                        [styles.filters__filter]: true,
                        [styles['filters__filter--active']]: filter === option.id
                    })}
                    key={option.id}
                    onClick={() => selectFilter(option)}>
                    {option.label}
                </button>
            ))}
        </div>
    )
}