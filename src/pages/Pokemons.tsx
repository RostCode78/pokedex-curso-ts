import { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import { Link } from 'react-router-dom';
import styles from './pokemons.module.css';
import { fetchPokemon } from '../api/fetchPokemons';
import { Pokemon } from '../types/types';
import { waitFor } from './../utils/utils';

const Pokemons = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ query, setQuery ] = useState("");
  const [ pokemons, setPokemons ] = useState<Pokemon[]>([]);

  useEffect( () => {
    const FetchAllPokemons = async () => {
      setIsLoading(true);
      await waitFor(1000);
      const AllPokemons = await fetchPokemon();
      setPokemons(AllPokemons);
      setIsLoading(false);
    }
    FetchAllPokemons();
  }, []);

  if ( isLoading || !pokemons ) {
      return <LoadingScreen/>;
  }

  const filteredPokemons = pokemons?.slice(0, 649).filter((pokemon) => {
    return pokemon.name.toLocaleLowerCase().match(query.toLocaleLowerCase());
  });

  return (
    <>
        <Header
          query={ query }
          setQuery={ setQuery }
        />
        <main>
          <nav className={ styles.nav }>
            { filteredPokemons?.slice(0, 649).map( pokemon => (
              <Link key={ pokemon.id } className={ styles.listItem } to={ `/pokemon/${ pokemon.name.toLocaleLowerCase() }` }>
                <img className={ styles.listItemIcon } src={ pokemon.imgSrc.toLocaleLowerCase() } alt={ pokemon.name } />
                <div className={ styles.listItemText }>
                  <span>{ pokemon.name }</span>
                  <span>{ pokemon.id }</span>
                </div>
              </Link>
            ))}
          </nav>
        </main>
        <Footer/>
    </>
  )
}

export default Pokemons;