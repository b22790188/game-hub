import { useState } from 'react'
import { Text , Grid, GridItem, Show} from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenre'
import PlatformSelector from './components/PlatformSelector'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

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
          <GenreList onSelectGenre={(genre: Genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre}/>
        </GridItem>
      </Show>
      <GridItem area="main" >
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  )
}

export default App
