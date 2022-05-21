import React from 'react'
import { useNavigate } from "react-router-dom";
import styles from './../assets/styles/Header.module.css'
import GHlogo from './../assets/icons/github.svg'

const Header = (props) => {
    let history = useNavigate();

    const addChanges = (event) => {
      if (event.key === "Enter") {
        history(`/users/${event.target.value}`);
        props.setUsername(event.target.value);
        event.target.value = "";
      }
    };
    
    return (
        <div className={styles.headerContainer}>
          <div className={styles.header}>
              <img src={GHlogo} alt="GitHub logotype" />
            <section className={styles.headerInputContainer}>
              <input
                type="text"
                placeholder="Enter GitHub username"
                className={styles.headerInput}
                onKeyPress={addChanges}
              />
              <div></div>
            </section>
          </div>
        </div>
      );
}

export default Header;