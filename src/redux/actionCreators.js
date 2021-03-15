import { CHANGE_PAGE, CATCH_POKEMON } from "./actions";

const changePage = (e) => {
    return {
            type: CHANGE_PAGE,
            value: parseInt(e.target.value),
        }
}

const catchPokemon = (e) => {
    return {
        type: CATCH_POKEMON,
        value: parseInt(e.currentTarget.value),
    }
}

export { changePage, catchPokemon };