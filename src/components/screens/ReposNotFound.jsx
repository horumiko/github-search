import React from 'react'
import ReposNotFoundIcon from './../../assets/icons/reposNotFound.svg'
import styles from './../../assets/styles/screens/screens.module.css'

const ReposNotFound = () => {
    return(
        <div className={styles.container}>
            <img src={ReposNotFoundIcon} alt="Repos not found icon" />
            <p className="screen-title">Repository list is empty</p>
        </div>
    )
}

export default ReposNotFound;