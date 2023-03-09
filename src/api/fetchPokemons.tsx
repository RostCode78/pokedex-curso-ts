import { formatPokemonName } from "./../utils/utils";
import { Pokemon } from "../types/types";

// La función asincrónica `fetchPokemon` se encarga de obtener los datos de los pokemones 
export async function fetchPokemon (): Promise<Pokemon[]> {
    
    // Se utiliza la función `fetch` para hacer una petición GET al archivo JSON que contiene la información de los pokemones
    const response = await fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json');
    
    // Se verifica que la respuesta sea válida, en caso contrario se lanza un error 
    if ( !response ) {
        throw new Error("Failed to fetch Pokemon");
    }

    // Se convierte la respuesta de la petición a formato JSON
    const results = await response.json();

    // Se mapea la lista de resultados para obtener únicamente los campos necesarios de cada pokemon

    const pokemons = results.results.map( ( pokemon: any ) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonName(pokemon.name)}.gif`
    }));

    // Se filtran los pokemones repetidos, dejando únicamente uno de cada uno en la lista
    const uniquePokemons = pokemons.filter(
        ( pokemon: any, index: number ) =>
        pokemons.findIndex((other: any) => other.id === pokemon.id) === index
    );

    // Se devuelve la lista de pokemones únicos 
    return uniquePokemons;
}
