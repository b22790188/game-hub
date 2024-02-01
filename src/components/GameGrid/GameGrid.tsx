import { useEffect, useState } from "react";
import apiClients from "../../services/api-clients";
import { Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

export default function GameGrid(){
  const { game, error} = useGame();

  return (
    <>
      { error && <Text>{error}</Text> }
      <ul>
        {game.map(game => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  )
}

