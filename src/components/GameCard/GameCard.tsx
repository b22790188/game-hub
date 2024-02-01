import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGame'

interface Props {
  game: Game;
}
export default function GameCard({ game }: Props) {
    
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={game.background_image}/>
      <CardBody>
        <Heading size='lg'>{game.name}</Heading>
      </CardBody>
    </Card>
  )
}