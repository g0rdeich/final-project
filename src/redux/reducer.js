import {CATCH_POKEMON, CHANGE_PAGE_MAIN, CHANGE_PAGE_COLLECTION} from "./actions";
import { pokemons } from "../info";

const initialState = {paginationPageMain: 1,
    paginationPageCollection: 1,
    pokemons: pokemons,
    navButtons: [{
        pageName: 'Main',
        link: '/main',
    },
        {
            pageName: 'Collection',
            link: '/collection',
        },
    ],
    activePage: '/',
    caughtPokemonIds: [1, 2, 3, 56, 95, 560],
    cardsOnPage: 10,
}

const pageReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_PAGE_MAIN: return { ...state, paginationPageMain: action.value};
        case CHANGE_PAGE_COLLECTION: return { ...state, paginationPageCollection: action.value};
        case CATCH_POKEMON: return { ...state, caughtPokemonIds: [...state.caughtPokemonIds, action.value]
                .sort((a, b) => a - b)};
        default: return state;
        }
}

export default pageReducer;