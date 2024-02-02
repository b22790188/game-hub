import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

export default function GameGrid(){
  const { game, error, isLoading} = useGame();
  const Skeletons = [1, 2, 3, 4, 5, 6]

  return (
    <>
      { error && <Text>{error}</Text> }
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} spacing={10} padding={7}>
        { isLoading && Skeletons.map((skelton) => <GameCardSkeleton key={skelton} />)}
        {game.map(game => <GameCard key={game.id} game={game}></GameCard>)}
      </SimpleGrid>
    </>
  )
}

