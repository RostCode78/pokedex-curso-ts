// Importa los estilos CSS específicos del componente desde un archivo separado
import styles from './header.module.css';

// Define un tipo de objeto que describe los props que recibe el componente
type HeaderProps = {
  query: string, // Propiedad 'query' que representa el valor de búsqueda actual
  setQuery: (query: string) => void; // Propiedad 'setQuery' que representa la función para actualizar el valor de búsqueda
}

// Define el componente de encabezado que muestra una barra de búsqueda
const Header = ({ query, setQuery }: HeaderProps) => {
  // Devuelve un elemento de encabezado con un input de búsqueda
  return (
    <header className={styles.header}> {/* Aplica la clase CSS 'header' del archivo de estilos al elemento de encabezado */}
        <input
            type="text"
            placeholder="Search a Pokemon"
            className={styles.input} // {/* Aplica la clase CSS 'input' del archivo de estilos al input de búsqueda */}
            value={ query } // {/* Establece el valor del input de búsqueda al valor de 'query' del prop */}
            onChange={ (event) => setQuery(event.target.value) } // {/* Establece el manejador de eventos 'onChange' del input de búsqueda para actualizar el valor de 'query' en respuesta a los cambios del usuario */}
        />
    </header>
  )
}

// Exporta el componente de encabezado para que pueda ser utilizado en otros archivos
export default Header;
