import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectOrder: (Order: string) => void;
  selectedOrder: string;
}

export default function SortSelector({ onSelectOrder, selectedOrder }: Props) { 
    const ordering = [
      {value: "name", label: "Name"},
      {value: "-released", label: "Released"},
      {value: "-added", label: "Added"},
      {value: "-created", label: "Created"},
      {value: "-updated", label: "Updated"},
      {value: "-rating", label: "Rating"},
      {value: "-metacritic", label: "Metacritic"},
    ] 

    const currentOrder = ordering.find(order => order.value === selectedOrder)

    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by {currentOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {ordering.map((order) => (
            <MenuItem onClick={() => onSelectOrder(order.value)} key={order.value}>{order.label}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    )
 }
