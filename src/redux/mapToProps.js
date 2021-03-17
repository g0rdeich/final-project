import {bindActionCreators} from "redux";
import {
    catchPokemon,
    changePageCollection,
    changePageMain,
    goToNextProfile,
    goToPrevProfile,
    goToProfile, goToRandomProfile, startApp
} from "./actionCreators";

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePageMain: bindActionCreators(changePageMain, dispatch),
        changePageCollection: bindActionCreators(changePageCollection, dispatch),
        catchPokemon: bindActionCreators(catchPokemon, dispatch),
        goToProfile: bindActionCreators(goToProfile, dispatch),
        goToPrevProfile: bindActionCreators(goToPrevProfile, dispatch),
        goToNextProfile: bindActionCreators(goToNextProfile, dispatch),
        startApp: bindActionCreators(startApp, dispatch),
        goToRandomProfile: bindActionCreators(goToRandomProfile, dispatch),
    }
}

export {mapStateToProps, mapDispatchToProps};