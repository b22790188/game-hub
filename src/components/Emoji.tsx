import { Image, ImageProps, Text } from "@chakra-ui/react";
import bullseye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsup from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}
export default function Emoji({ rating }: Props) {
  const emoji: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsup, alt: "thums up", boxSize: "25px" },
    5: { src: bullseye, alt: "bullseye", boxSize: "25px" },
  };
  return <Image {...emoji[rating]} marginTop={2} />;
}
