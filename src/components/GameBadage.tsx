import { Badge } from "@chakra-ui/react";

interface Props {
  metatMetric: number;
}

export default function GameBadage({ metatMetric }: Props) {
  const color = metatMetric > 75 ? "green" : metatMetric > 50 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize="15px" borderRadius="4px">
      {metatMetric}
    </Badge>
  );
}
