import React from "react";

const PaginationMainBtn = ( {num, store} ) => {
    return(
        <button className={num === store.paginationPageMain ? "btn btn-pagination btn-pagination-active" : "btn btn-pagination"}
                onClick={store.changePageMain} value={num}>{num.toString()}</button>
    )
}

export default PaginationMainBtn;