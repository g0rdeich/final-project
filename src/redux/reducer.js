import {
    CATCH_POKEMON,
    CHANGE_PAGE_MAIN,
    CHANGE_PAGE_COLLECTION,
    GO_TO_PROFILE,
    GO_TO_PREV_PROFILE,
    GO_TO_NEXT_PROFILE
} from "./actions";
import { pokemons } from "../info";

const initialState = {paginationPageMain: 1,
    paginationPageCollection: 1,
    pokemons: pokemons,
    pages: [
        {
            pageName: 'Main',
            link: '/main',
        },
        {
            pageName: 'Collection',
            link: '/collection',
        },
        {
            pageName: 'Profiles',
            link: '/profiles',
        },
    ],
    // activePage: '/',
    caughtPokemonIds: [1, 2, 3, 56, 95, 560],
    cardsOnPage: 10,
    activeProfileId: 62,
}

const pageReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_PAGE_MAIN: return { ...state, paginationPageMain: action.value};
        case CHANGE_PAGE_COLLECTION: return { ...state, paginationPageCollection: action.value};
        case CATCH_POKEMON: return { ...state, caughtPokemonIds: [...state.caughtPokemonIds, action.value]
                .sort((a, b) => a - b)};
        case GO_TO_PROFILE: return {...state, activeProfileId: action.value};
        case GO_TO_PREV_PROFILE: return {...state, activeProfileId: state.activeProfileId - 1};
        case GO_TO_NEXT_PROFILE: return {...state, activeProfileId: state.activeProfileId + 1};
        default: return state;
        }
}

export default pageReducer;