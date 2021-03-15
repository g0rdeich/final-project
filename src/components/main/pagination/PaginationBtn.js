import React from "react";

const PaginationBtn = ( {num, store} ) => {
    return(
        <button className="btn-pagination" onClick={store.changePage} value={num}>{num.toString()}</button>
    )
}

export default PaginationBtn;