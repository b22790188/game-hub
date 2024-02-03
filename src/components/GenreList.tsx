import { HStack, Image, List, ListItem, Spinner, Button} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../hooks/useGenre";
interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}
export default function GenreList({ onSelectGenre, selectedGenre }:Props) {
  const { data, error, isLoading } = useGenre() ;

  if(isLoading) return <Spinner />
  if(error) return null

  return (
    <>
      <List>
        {data.map((genre) =>
          <ListItem key={genre.id} marginY='15px'>
            <HStack>
              <Image boxSize='32px' borderRadius='8px' src={getCroppedImageUrl(genre.image_background)}></Image>
              <Button fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='md' variant='link'>{genre.name}</Button>
            </HStack>
          </ListItem>
        )} 
      </List>
    </>
  )
}