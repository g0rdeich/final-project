import React from "react";

const PaginationCollectionBtn = ({num, store} ) => {
    return(
        <button className="btn-pagination" onClick={store.changePageCollection} value={num}>{num.toString()}</button>
    )
}

export default PaginationCollectionBtn;