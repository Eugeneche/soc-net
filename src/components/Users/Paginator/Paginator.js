import React, { useState } from 'react';
import styles from './Paginator.module.css';
    
const Paginator = (props) => {

    let pages = [];
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    /* --- */
    let pagesRange = 10;
    
    //let currentRange = Math.ceil(props.currentPage / pagesRange);
    const [currentRange, setCurrentRange] = useState(1);
    let leftLimit = (currentRange - 1) * pagesRange + 1; //left limit of range
    let rightLimit = currentRange * pagesRange; //right limit of range
    /* --- */

    let pagesPagination = pages
        .filter(page => page >= leftLimit && page <= rightLimit)
        .map(page => {
            return <span key={page} 
            className={page === props.currentPage ? styles.selected : ''} 
            /* similar: className={page === props.currentPage && styles.selected}  */
            onClick={ (e) => props.getCurrentUsers(page)}>{page}</span>
    });

    let ranges = Math.ceil(pagesCount / pagesRange);
    console.log(ranges);

    return <div className={styles.pagination}>
            {currentRange > 1 && <button className={styles.paginationNav} onClick={ () => setCurrentRange(currentRange - 1)}>&#60;&#60; PREW</button>}
            {pagesPagination}
            {currentRange < ranges && <button className={styles.paginationNav} onClick={ () => setCurrentRange(currentRange + 1)}>NEXT &gt;&gt;</button>}
        </div>
}

export default Paginator;
