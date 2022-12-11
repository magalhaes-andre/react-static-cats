import styles from './Ordenator.module.scss';
import options from './options.json';
import React, { SetStateAction, useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
    ordenator: string,
    setOrdenator: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenator({ ordenator, setOrdenator }: Props) {
    const [openState, setOpenState] = useState(false);
    const ordenatorName = ordenator && options.find(option => option.value === ordenator)?.name

    return (
        <button
            className={classNames({
                [styles.ordenator]: true,
                [styles["ordenator--active"]]: ordenator !== "",
            })}
            onClick={() => setOpenState(!openState)}
            onBlur={() => setOpenState(false)}
        >
            <span>{ordenatorName || "Order By"}</span>
            {openState ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            <div className={classNames({
                [styles.ordenator__options]: true,
                [styles["ordenator__options--active"]]: openState
            })}
            >
                {options.map(option => (
                    <div
                        className={styles.ordenator__option}
                        key={option.value}
                        onClick={() => setOrdenator(option.value)}
                    >
                        {option.name}
                    </div>
                ))}
            </div>
        </button >
    )

}