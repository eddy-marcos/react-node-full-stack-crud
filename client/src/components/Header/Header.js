import React from 'react'
import tasksImg from '../../images/clipboard.png';
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header} data-testid="header">
            <h2 className="h2">My Tasks</h2>
            <img src={tasksImg} alt="icon" height="60" />
        </header>
    )
}

export default Header