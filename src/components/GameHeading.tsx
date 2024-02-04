import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery
}
export default function GameHeading({ gameQuery }: Props) {
    const gameHeading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

    return (
        <Heading marginY={3}>{gameHeading}</Heading>
    )
}