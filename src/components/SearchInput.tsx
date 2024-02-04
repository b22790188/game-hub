import { Input, InputGroup, InputLeftAddon, InputLeftElement } from "@chakra-ui/react";
import { BsSearch, BsServer } from "react-icons/bs";

export default function SearchInput() {
  return (
    <InputGroup>
      <InputLeftElement children={(<BsSearch />)}/>
      <Input borderRadius={15} placeholder="Search games..." variant='filled'></Input>
    </InputGroup>
  )
}