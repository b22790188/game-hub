import { Menu, MenuItem, MenuList, MenuButton, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";

export default function PlatformSelector() {
  const { data, error } = usePlatform();
  
  if(error) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platform</MenuButton>
      <MenuList>
        {data.map((platform) => (<MenuItem key={platform.id}>{platform.name}</MenuItem>))}
      </MenuList>
    </Menu>
  )
}
