import React from "react";

const PaginationMainNextPageBtn = ( {store} ) => {
    return(
        <button className="btn btn-pagination"
        onClick={store.goToNextPageMain}>→</button>
    )
}

export default PaginationMainNextPageBtn;