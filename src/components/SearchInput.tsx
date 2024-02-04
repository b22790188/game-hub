import { useRef } from "react";
import { Input, InputGroup, InputLeftAddon, InputLeftElement } from "@chakra-ui/react";
import { BsSearch, BsServer } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void
}
export default function SearchInput({ onSearch}: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
    <form onSubmit={(e) => {
        e.preventDefault();
        {onSearch(ref.current?.value || "")}
    }}>
      <InputGroup>
        <InputLeftElement children={(<BsSearch />)}/>
        <Input ref={ref} borderRadius={15} placeholder="Search games..." variant='filled'></Input>
      </InputGroup>
    </form>
    </>
  )
}