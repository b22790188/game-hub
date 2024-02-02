import { Badge, Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGame'
import PlatformIconList from './PlatformIconList';
import GameBadage from './GameBadage';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  game: Game;
}
export default function GameCard({ game }: Props) {
    
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={getCroppedImageUrl(game.background_image)}/>
      {/* <Image src={game.background_image}/>  */}
      <CardBody>
        <Heading size='md'>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
          <GameBadage metatMetric={game.metacritic}></GameBadage>
        </HStack>
      </CardBody>
    </Card>
  )
}