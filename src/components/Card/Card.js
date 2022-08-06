import { Flex } from "@chakra-ui/react";
import React from "react";
import { withColorMode } from "../../libs/hocs";

const Card = (props) => {
  return (
    <Flex
      //   maxW={"sm"}
      //   w={""}
      rounded={"lg"}
      shadow={"lg"}
      bgColor={props.isDark ? "gray.800" : "white"}
      p={"4"}
      {...props}
    >
      {props.children}
    </Flex>
  );
};

export default withColorMode(Card);
