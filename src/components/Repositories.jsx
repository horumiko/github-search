import React, { useState, useEffect} from "react";
import PropTypes from 'prop-types';
import Loader from "./screens/Loader";
import ReposNotFound from './screens/ReposNotFound'
import styles from "./../assets/styles/Repositories.module.css";
import Paginate from "./Paginate/Paginate.jsx";


const Repositories = ({ username }) => {
  const [isDone, setDone] = useState(false);
  const [reposInfo, setReposInfo] = useState([]);
  const [repLength, setRepLength] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;
  const pageCount = Math.ceil(repLength / perPage);

  let url = new URL(`https://api.github.com/users/${username}/repos`); 


  const changeCurrentPage = ({ selected: selectedPage }) => {
      setCurrentPage(selectedPage + 1);
      getRepositories()
    };
  
  url.searchParams.set('per_page', perPage);
  
  useEffect(()=>{
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((result) => {
        setRepLength(result['public_repos'])
      })
  }, [])

  useEffect(() => {
    getRepositories();
  }, [url.href, username, currentPage]);

  const getRepositories = () => {
    url.searchParams.set('page', currentPage);
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setDone(true);
          setReposInfo(result);
        }
      );
  }
if (!isDone) {
    return (
      <div className={styles.ReposNotFound}>
        <Loader />
      </div>
    );
  } else if (!repLength) {
    return (
      <div className={styles.ReposNotFound}>
        <ReposNotFound />
      </div>
    );
  } else {
    return (
      <div className={styles.reposContainer}>
        <h2 className={styles.reposContainerHeader}>
          Repositories ({repLength})
        </h2>
        <div className={styles.repos}> {reposInfo.map((repo) => 
          <div className={styles.reposRepo} key={repo.id}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className={styles.repoHeading}
            >
              {repo.name}
            </a>
            <p className={styles.repoDescription}>{repo.description}</p>
          </div>)}    
        </div>
        <div className={styles.paginate}>
          <Paginate 
            pageCount={pageCount}
            changeCurrentPage={changeCurrentPage}
            repLength={repLength}
            currentPage={currentPage}
            perPage={perPage}
            />
        </div>
      </div>
    );
  }
}


Repositories.propTypes = {
  username: PropTypes.string
};

export default Repositories;
