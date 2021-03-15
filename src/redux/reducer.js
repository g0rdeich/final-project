import { CHANGE_PAGE, CATCH_POKEMON } from "./actions";
import { pokemons } from "../info";

const initialState = {page: 1,
    pokemons: pokemons,
    navButtons: ['Main', 'Collection'],
    caughtPokemonIds: [1, 2, 3],
    cardsOnPage: 10,
}

const pageReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_PAGE: return { ...state, page: action.value};
        case CATCH_POKEMON: console.log(action.value);
        return { ...state, caughtPokemonIds: [...state.caughtPokemonIds, action.value]}
        default: return state;
        }
}

export default pageReducer;