// https://pokeapi.co/api/v2/pokemon/ditto
import { PokemonDetails } from './../types/types';
import { formatPokemonName } from '../utils/utils';

export async function fetchPokemon( name: string ): Promise<PokemonDetails> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ formatPokemonName(name) }`);

    if ( !response ) {
        throw new Error("Failed to fetch Pokemon");
    }

    const result = await response.json();

    const pokemon = {
        name: result.name,
        id: result.id,
        imgSrc: result.sprites.front_default,
        hp: result.stats[0].base_stat,
        atk: result.stats[1].base_stat,
        def: result.stats[2].base_stat
    };

    return pokemon;
}