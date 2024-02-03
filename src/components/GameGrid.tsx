import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import { Platform } from "../hooks/useGame";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery
}

export default function GameGrid({ gameQuery }: Props){
  const { data, error, isLoading} = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      { error && <Text>{error}</Text> }
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} spacing={10} padding={5}>
        { isLoading && skeletons.map((skelton) => (
          <GameCardContainer key={skelton}>
            <GameCardSkeleton key={skelton}/>
          </GameCardContainer>
        ))}
        {data.map(game => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}

