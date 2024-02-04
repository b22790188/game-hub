import { HStack, Image, List, ListItem, Spinner, Button, Heading} from "@chakra-ui/react";
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
      <Heading fontSize='2xl'>Genres</Heading>
      <List>
        {data.map((genre) =>
          <ListItem key={genre.id} marginY='15px'>
            <HStack>
              <Image objectFit='cover' boxSize='32px' borderRadius='8px' src={getCroppedImageUrl(genre.image_background)}></Image>
              <Button textAlign='left' whiteSpace='normal' fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='md' variant='link'>{genre.name}</Button>
            </HStack>
          </ListItem>
        )} 
      </List>
    </>
  )
}