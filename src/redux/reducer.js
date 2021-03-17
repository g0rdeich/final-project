import {
    CATCH_POKEMON,
    CHANGE_PAGE_MAIN,
    CHANGE_PAGE_COLLECTION,
    GO_TO_PROFILE,
    GO_TO_PREV_PROFILE,
    GO_TO_NEXT_PROFILE,
    START_APP, GO_TO_RANDOM_PROFILE
} from "./actions";
import {initialState} from "./initialState";
import addZero from "../helperFunctions/addZero";
import getRandomInt from "../helperFunctions/getRandomInt";

const pageReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_PAGE_MAIN: return { ...state, paginationPageMain: action.value};
        case CHANGE_PAGE_COLLECTION: return { ...state, paginationPageCollection: action.value};
        case CATCH_POKEMON: return { ...state,
            caughtPokemonIds: [...state.caughtPokemonIds, action.value].sort((a, b) => a - b),
            pokemons:
                state.pokemons.map((item) => item.id === action.value ? {
                ...item,
                captureDate: `${addZero(action.date.getDate())}.${addZero(action.date.getMonth() + 1)}.${action.date.getFullYear()}`,
            } : item)};
        case GO_TO_PROFILE: return {...state, activeProfileId: action.value};
        case GO_TO_PREV_PROFILE: return {...state,
            activeProfileId: state.activeProfileId === 1 ? state.pokemons.length : state.activeProfileId - 1};
        case GO_TO_NEXT_PROFILE: return {...state,
            activeProfileId: state.activeProfileId === state.pokemons.length ? 1 : state.activeProfileId + 1};
        case GO_TO_RANDOM_PROFILE: return {...state,
            activeProfileId: getRandomInt(1, state.pokemons.length)}
        case START_APP: return {...state, appStarted: true};
        default: return state;
        }
}

export default pageReducer;