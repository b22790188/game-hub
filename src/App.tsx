import { useState } from 'react'
import { Text , Grid, GridItem, Show} from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenre'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGame'

export interface GameQuery {
  genre: Genre | null,
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid 
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr"
      }}
    >
      <GridItem area="nav">
        <NavBar/>
      </GridItem>
      <Show above='lg'>
        <GridItem area="sidebar" paddingX={5}>
          <GenreList onSelectGenre={(genre: Genre) => setGameQuery({...gameQuery, genre})} selectedGenre={gameQuery.genre}/>
        </GridItem>
      </Show>
      <GridItem area="main" >
        <PlatformSelector onPlatformSelected={(platform) => setGameQuery({...gameQuery, platform})} selectedPlatform={gameQuery.platform}/>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  )
}

export default App
