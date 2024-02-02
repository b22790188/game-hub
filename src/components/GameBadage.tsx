import { Badge } from "@chakra-ui/react";
import { Game } from "./hooks/useGame"

interface Props {
  metatMetric: number;
}

export default function GameBadage({ metatMetric }: Props) {
  let color = metatMetric > 75 ? 'green' : metatMetric > 50 ? 'yellow' : 'red'

  return (
    <Badge colorScheme={color}fontSize='18px' borderRadius='4px'>{metatMetric}</Badge>
  )
}