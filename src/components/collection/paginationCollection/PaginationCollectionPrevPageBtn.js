import React from "react";

const PaginationCollectionPrevPageBtn = ( {store} ) => {
    return(
        <button className="btn btn-pagination"
                onClick={store.goToPrevPageCollection}>←</button>
    )
}

export default PaginationCollectionPrevPageBtn;