import useGenre from "../hooks/useGenre"
import useData from "../hooks/useData"
import { Genre } from "../hooks/useGenre";
export default function GenreList() {
  const { data } = useGenre() ;

  return (
    <>
      <ul>
        {data.map((genre) => 
          <li key={genre.id}>{genre.name}</li>
        )} 
      </ul>
    </>
  )
}