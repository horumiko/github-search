import React from 'react'
import userNotFound from './../../assets/icons/userNotFound.svg'
import styles from './../../assets/styles/screens/screens.module.css'

const UserNotFound = (props) => {
    return(
        <div className={styles.container}>
            <img src={userNotFound} alt="User not found icon" />
            <p className={styles.text}>User not found</p>
        </div>
    )
}

export default UserNotFound;