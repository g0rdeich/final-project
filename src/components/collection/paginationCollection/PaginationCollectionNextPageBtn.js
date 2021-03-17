import React from "react";

const PaginationCollectionNextPageBtn = ( {store} ) => {
    return(
        <button className="btn btn-pagination"
                onClick={store.goToNextPageCollection}>→</button>
    )
}

export default PaginationCollectionNextPageBtn;