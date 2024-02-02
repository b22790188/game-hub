import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-url";
export default function GenreList() {
  const { data } = useGenre() ;

  return (
    <>
      <List>
        {data.map((genre) =>
          <ListItem key={genre.id} marginY='15px'>
            <HStack>
              <Image boxSize='32px' borderRadius='8px' src={getCroppedImageUrl(genre.image_background)}></Image>
              <Text fontSize='md'>{genre.name}</Text>
            </HStack>
          </ListItem>
        )} 
      </List>
    </>
  )
}