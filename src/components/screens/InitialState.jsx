import React from 'react'
import searchIcon from './../../assets/icons/search.svg'
import styles from './../../assets/styles/screens/screens.module.css'

const InitialState = (props) => {
    return(
        <div className={styles.container}>
            <img src={searchIcon} alt="Search icon" />
            <p className={styles.text}>
                Start with searching <br/> a GitHub user
            </p>
        </div>
    )
}

export default InitialState;