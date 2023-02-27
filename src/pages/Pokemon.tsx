import { useParams } from "react-router-dom";

const Pokemon = () => {

    const { name } = useParams();

    console.log( name );

  return (
    <div>{ name }</div>
  )
}

export default Pokemon;