import {
  FaWindows, 
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from 'react-icons/bs'
import { SiNintendo } from "react-icons/si";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "./hooks/useGame";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

export default function({ platforms }: Props) {
  const iconMap : {[key:string]:IconType}= {
    linux: FaLinux,
    mac: FaApple,
    ios: MdPhoneIphone,
    web: BsGlobe,
    xbox: FaXbox,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    android: FaAndroid,
    pc: FaWindows,
  }

  return (
    <>
      <HStack marginY={'10px'}>
        {platforms.map(platform => 
          <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500"/>)
        }
      </HStack>
    </>
  )
}