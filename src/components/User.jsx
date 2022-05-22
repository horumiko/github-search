import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import UserNotFound from './screens/UserNotFound';
import Loader from './screens/Loader';
import styles from './../assets/styles/User.module.css';
import personIcon from './../assets/icons/person.svg';
import personsIcon from './../assets/icons/persons.svg';
import Repositories from './Repositories';

const User = (props) => {
    let { id } = useParams();
    const [username, setUsername] = useState(props.username !== undefined 
                                                ? props.username : id);
    const [userData, setUserData] = useState();
    const [isDone, setDone] = useState(false);
    const gitUserURL = `https://api.github.com/users/${username}`;

    useEffect(() => {
        props.username !== undefined ? 
                setUsername(props.username) : setUsername(id);
    }, [props.username, id])
    
    useEffect(()=>{
        setDone(false);
        fetch(gitUserURL)
            .then((response) => response.json())
            .then(
                (response) => {
                    setDone(true);
                    setUserData(response);
                }
            )
    }, [gitUserURL]);

    if (!isDone) {
        return <Loader />
    } 
    else if (
        userData.message === "Not Found" ||
        userData.login === "undefined" ||
        username === "undefined"
      ) {
        return <UserNotFound />;
      } 
    else {
        return (
            <section className={styles.userContainer}>
                <div className={styles.user}>
                    <div className={styles.userInfo}>
                     <img className={styles.userImg} src={userData.avatar_url} alt="User"></img>
                        <h2 className={styles.userName}>{userData.name}</h2>
                     <a className={styles.userLogin} href={userData.html_url} target="_blank" rel='noreferrer'>
                        {userData.login}
                        </a>
                    <div className={styles.followersContainer}>
                        <span className={styles.userFollowers} >
                            <img className={styles.personIcon} src={personsIcon} alt="Followers"></img>
                            {userData.followers} followers
                        </span>
                        <span className={styles.userFollowing}>
                            <img className={styles.personIcon} src={personIcon} alt="Following"></img>
                            {userData.following} following
                        </span>
                    </div>
                </div>
                <Repositories username={username} />
              </div>
            </section>);
    }
}

export default User;