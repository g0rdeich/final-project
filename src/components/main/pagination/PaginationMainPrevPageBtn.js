import React from "react";

const PaginationMainPrevPageBtn = ( {store} ) => {
    return(
        <button className="btn btn-pagination"
        onClick={store.goToPrevPageMain}>←</button>
    )
}

export default PaginationMainPrevPageBtn;