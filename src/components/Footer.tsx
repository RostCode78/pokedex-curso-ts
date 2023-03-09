import { Link } from "react-router-dom";
import styles from './footer.module.css';
// Assets
import PokemonPic from '../assets/pikachu.png';
import LocationPic from '../assets/pointer.png';
import ItemsPic from '../assets/pokeball.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Link
          to="/pokemons" 
          className={styles.footerLink}
        >
          <img className={ styles.footerIcon } src={ PokemonPic } alt="Pokeball" />
          Pokemons
        </Link>
        <Link 
          onClick={ e => e.preventDefault() }
          to="/items" 
          className={styles.footerLink
        }>
          <img className={ styles.footerIcon } src={ ItemsPic } alt="Items" />
          Items
        </Link>
        <Link 
          onClick={ e => e.preventDefault() }
          to="/location" 
          className={styles.footerLink}
        >
          <img className={ styles.footerIcon } src={ LocationPic } alt="Map" />
          Map
        </Link>
    </footer>
  )
}

export default Footer