import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "../GameCard/Gamecard";

export default function GameGrid(){
  const { game, error} = useGame();

  return (
    <>
      { error && <Text>{error}</Text> }
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} spacing={10} padding={7}>
        {game.map(game => <GameCard key={game.id} game={game}></GameCard>)}
      </SimpleGrid>
    </>
  )
}

