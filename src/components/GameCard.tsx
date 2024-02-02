import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from './hooks/useGame'
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Game;
}
export default function GameCard({ game }: Props) {
    
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={game.background_image}/>
      <CardBody>
        <Heading size='md'>{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
      </CardBody>
    </Card>
  )
}