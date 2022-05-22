import React from 'react'
import ReactPaginate from "react-paginate";
import PropTypes from 'prop-types';
import Next from "./../../assets/icons/next.svg"
import Prev from "./../../assets/icons//prev.svg";
import styles from "./../../assets/styles/Repositories.module.css";

const Paginate = (props) => {
    return (
        <>
         <CountPages
            reposLength={Number(props.repLength)}
            currentPage={Number(props.currentPage - 1)}
            perPage={Number(props.perPage)}
          />
          <ReactPaginate
            previousLabel={<img src={Prev} alt="prev" />}
            nextLabel={<img src={Next} alt="prev" />}
            pageCount={props.pageCount}
            onPageChange={props.changeCurrentPage}
            containerClassName={styles.container}
            previousLinkClassName={styles.previous}
            nextLinkClassName={styles.next}
            disabledClassName={styles.disabled}
            activeClassName={styles.active}
            marginPagesDisplayed={1}
          />
        </>    
    )
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

CountPages.propTypes = {
    currentPage: PropTypes.number,
    perPage: PropTypes.number,
    reposLength: PropTypes.number,
    repLength: PropTypes.number,
}

Paginate.propTypes = {
    repLength: PropTypes.number,
    currentPage: PropTypes.number,
    pageCount: PropTypes.number, 
    perPage: PropTypes.number,
    changeCurrentPage: PropTypes.func
}

export default Paginate;