import {
    CHANGE_PAGE_MAIN,
    CHANGE_PAGE_COLLECTION,
    CATCH_POKEMON,
    GO_TO_PROFILE,
    GO_TO_PREV_PROFILE,
    GO_TO_NEXT_PROFILE,
    START_APP, GO_TO_RANDOM_PROFILE
} from "./actions";

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
        date: new Date(),
    }
}

const goToProfile = (e) => {
    return {
        type: GO_TO_PROFILE,
        value: parseInt(e.target.id),
    }
}

const goToPrevProfile = () => {
    return {
        type: GO_TO_PREV_PROFILE,
    }
}

const goToNextProfile = () => {
    return {
        type: GO_TO_NEXT_PROFILE,
    }
}

const goToRandomProfile = () => {
    return {
        type: GO_TO_RANDOM_PROFILE
    }
}

const startApp = () => {
    return {
        type: START_APP,
    }
}

export { changePageMain, changePageCollection, catchPokemon, goToProfile, goToPrevProfile, goToNextProfile, startApp,
goToRandomProfile};