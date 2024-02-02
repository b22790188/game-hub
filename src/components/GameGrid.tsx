import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

export default function GameGrid(){
  const { data, error, isLoading} = useGame();
  const Skeletons = [1, 2, 3, 4, 5, 6]

  return (
    <>
      { error && <Text>{error}</Text> }
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} spacing={10} padding={5}>
        { isLoading && Skeletons.map((skelton) => 
          <GameCardContainer>
            <GameCardSkeleton key={skelton} />
          </GameCardContainer>
        )}
        {data.map(game => 
          <GameCardContainer>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainer>
        )}
      </SimpleGrid>
    </>
  )
}

