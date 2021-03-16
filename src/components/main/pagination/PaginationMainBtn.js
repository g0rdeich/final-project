import React from "react";

const PaginationMainBtn = ( {num, store} ) => {
    return(
        <button className="btn-pagination" onClick={store.changePageMain} value={num}>{num.toString()}</button>
    )
}

export default PaginationMainBtn;