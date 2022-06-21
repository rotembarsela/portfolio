import React from 'react'
import ReactPaginate from 'react-paginate'

const PaginationUtil = ({ pageCount, onPageChange, currentPage }) => {
    return (
        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={onPageChange}
            disableInitialCallback={true}
            containerClassName={"paginationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
        />
    )
}

export default PaginationUtil