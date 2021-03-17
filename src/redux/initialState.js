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
    caughtPokemonIds: [],
    cardsOnPage: 10,
    activeProfileId: 1,
    appStarted: false,
}

const addPokemons = async () => {
    const uri = 'http://localhost:9999/pokemons';

    const res = await fetch(uri);
    const pokemons = await res.json();
    const caughtPokemonsIds = [];
    pokemons.forEach((pokemon) => {
        if(!pokemon.captureDate) {
            pokemon.captureDate = 'You can catch this pokemon now or later';
        } else {
            caughtPokemonsIds.push(pokemon.id)
        }
    });
    initialState.pokemons = pokemons;
    initialState.caughtPokemonIds = caughtPokemonsIds;
}

addPokemons();

export { initialState };