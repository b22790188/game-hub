import { Card, CardBody, Skeleton } from '@chakra-ui/react'

export default function GameCardSkeleton(){
  return (
    <Card>
      <CardBody>
        <Skeleton height="250px"/>
      </CardBody>
    </Card>
  )   
}