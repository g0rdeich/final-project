import React from "react";

const PaginationCollectionBtn = ({num, store} ) => {
    return(
        <button className={num === store.paginationPageCollection ? "btn btn-pagination btn-pagination-active" : "btn btn-pagination"}
            onClick={store.changePageCollection} value={num}>{num.toString()}</button>
    )
}

export default PaginationCollectionBtn;