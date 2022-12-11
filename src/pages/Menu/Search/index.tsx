import React from "react";
import styles from './Search.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
    searchText: string,
    setSearchText: React.Dispatch<React.SetStateAction<string>>
}


export default function Search({ searchText, setSearchText }: Props) {
    return (
        <div className={styles.search}>
            <input
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
                placeholder="Search"
            />
            <CgSearch
                size={20}
                color="#4C4D5E" />
        </div>
    )
}