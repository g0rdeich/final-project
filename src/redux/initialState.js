import dummy from "../dummy";

const initialState = {paginationPageMain: 1,
    paginationPageCollection: 1,
    pokemons: dummy,
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
    caughtPokemonIds: [],
    cardsOnPage: 10,
    activeProfileId: 1,
    appStarted: false,
}

const addPokemons = async () => {
    const uri = 'http://localhost:9999/pokemons';

    const res = await fetch(uri);
    const pokemons = await res.json();
    pokemons.forEach((pokemon) => pokemon.captureDate = 'You can catch this pokemon later (from state)');
    initialState.pokemons = pokemons;
}

addPokemons();

export { initialState };