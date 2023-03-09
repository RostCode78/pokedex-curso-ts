import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { fetchPokemon } from '../api/fetchPokemon';
import Footer from "../components/Footer";
import styles from './pokemon.module.css';
import PokeballImg from './../assets/pokeball.png';
import LoadingScreen from '../components/LoadingScreen';
import { PokemonDetails } from "../types/types";
import { waitFor } from './../utils/utils';

const Pokemon = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ pokemon, setPokemon] = useState<PokemonDetails>();
    const { name } = useParams();
    const navigate = useNavigate();

    useEffect( () => {

      async function getPokemon() {
        setIsLoading(true);
        await waitFor(1000);
        const fechedPokemon = await fetchPokemon( name as string );
        setPokemon(fechedPokemon);
        setIsLoading(false);
      }

      getPokemon();

    }, [ name ]);

    if ( isLoading || !pokemon ) {
      return <LoadingScreen/>
    }

  return (
    <>
      <button className={ styles.pokeballButton } onClick={ () => navigate(-1) }>
        <img className={ styles.pokeballImg } src={PokeballImg} alt="PokeballImg" />
        Go Back
      </button>
      <div className={ styles.pokemon }>
        <main className={ styles.pokemonInfo }>
          <div className={ styles.pokemonTitle }>{ name?.toUpperCase() }</div>
          <div># { pokemon?.id }</div>
          <div>
            <img className={ styles.pokemonInfoImg } src={ pokemon?.imgSrc } alt="Bulbasaur" />
          </div>
          <div>HP: { pokemon?.hp }</div>
          <div>ATK: { pokemon?.atk }</div>
          <div>DEF: { pokemon?.def }</div>
        </main>
      </div>
      <Footer/>
    </>
  )
}

export default Pokemon;