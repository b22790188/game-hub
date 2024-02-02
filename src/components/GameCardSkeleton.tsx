import { Card, CardBody, Skeleton } from '@chakra-ui/react'

export default function GameCardSkeleton(){
  return (
    <Card width={"250px"} borderRadius={10}>
      <CardBody>
        <Skeleton height="250px"/>
      </CardBody>
    </Card>
  )   
}