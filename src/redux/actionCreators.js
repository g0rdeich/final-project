import { CHANGE_PAGE_MAIN, CHANGE_PAGE_COLLECTION, CATCH_POKEMON } from "./actions";

const changePageMain = (e) => {
    return {
            type: CHANGE_PAGE_MAIN,
            value: parseInt(e.target.value),
        }
}

const changePageCollection = (e) => {
    return {
        type: CHANGE_PAGE_COLLECTION,
        value: parseInt(e.target.value),
    }
}

const catchPokemon = (e) => {
    return {
        type: CATCH_POKEMON,
        value: parseInt(e.currentTarget.value),
    }
}

export { changePageMain, changePageCollection, catchPokemon };