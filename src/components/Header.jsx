import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import styles from './../assets/styles/Header.module.css'
import GHlogo from './../assets/icons/github.svg'
import searchIcon from './../assets/icons/search.svg'

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
        <header className={styles.headerContainer}>
          <div className={styles.header}>
            <Link to="/">
                <img src={GHlogo} alt="GitHub logotype" />
            </Link>
            <section className={styles.headerInputContainer}>
              <img src={searchIcon} alt='search' width='24px' height='24px'></img>
              <input
                type="text"
                placeholder="Enter GitHub username"
                className={styles.headerInput}
                onKeyPress={addChanges}
              />
              <div></div>
            </section>
          </div>
        </header>
      );
}

export default Header;