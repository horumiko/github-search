import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Loader from "./screens/Loader";
import ReposNotFound from './screens/ReposNotFound'
import Next from "./../assets/icons/next.svg"
import Prev from "./../assets/icons//prev.svg";
import styles from "./../assets/styles/Repositories.module.css";


const Repositories = (props) => {
  const [isDone, setDone] = useState(false);
  const [reposInfo, setReposInfo] = useState([]);
  const [username] = useState(props.username);
  const [currentPage, setCurrentPage] = useState([1]);
  const [repLength, setRepLength] = useState([]);
  let url = new URL(`https://api.github.com/users/${username}/repos`);

  let perPage = 4;
  let pageCount = Math.ceil(repLength / perPage);

  url.searchParams.set('page', currentPage);
  url.searchParams.set('per_page', perPage);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((result) =>{
        setRepLength(result.length);
      })
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setDone(true);
          setReposInfo(result);
        }
      );
  }, [url, username, currentPage]);

  const currentPageData = reposInfo
    .map((repo) => {
      return (
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
        </div>
      );
    });

  const changeCurrentPage = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage + 1);
  };

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
        <div className={styles.repos}> {currentPageData}</div>
        <div className={styles.paginate}>
        <CountPages
            reposLength={Number(repLength)}
            currentPage={Number(currentPage - 1)}
            perPage={Number(perPage)}
          />
          <ReactPaginate
            previousLabel={<img src={Prev} alt="prev" />}
            nextLabel={<img src={Next} alt="prev" />}
            pageCount={pageCount}
            onPageChange={changeCurrentPage}
            containerClassName={styles.container}
            previousLinkClassName={styles.previous}
            nextLinkClassName={styles.next}
            disabledClassName={styles.disabled}
            activeClassName={styles.active}
            marginPagesDisplayed={1}
          />
        </div>
      </div>
    );
  }
}
const CountPages = (props) => {
  let startPage = (1 + props.currentPage) * props.perPage - props.perPage + 1;
  let endPage = (1 + props.currentPage) * props.perPage;

  if (endPage > props.reposLength) endPage = props.reposLength;
  return (
    <p className="paginateLegend">
      {startPage}-{endPage} of {props.reposLength}
    </p>
  );
};

export default Repositories;
