import { useState } from 'react'
import { Button, ButtonGroup, Grid, GridItem, Show} from '@chakra-ui/react'

function App() {
 
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "sidebar main"`
    }}>
      <GridItem area="nav" bg='blue'>nav</GridItem>
      <Show above='lg'>
        <GridItem area="sidebar" bg='orange'>sidebar</GridItem>
      </Show>
      <GridItem area="main" bg='green'>main</GridItem>
    </Grid>
  )
}

export default App
