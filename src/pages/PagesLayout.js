import {
  Box,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Switch,
  Tag,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  MdOutlineHome,
  MdPerson,
  MdOutlineMenu,
  MdOutlineSearch,
  MdArrowBackIos,
  MdArrowForwardIos,
  MdNotifications,
} from "react-icons/md";
import { Outlet } from "react-router-dom";

const PagesLayout = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [sbMinimize, setSbMinimize] = useState(false);

  return (
    <>
      <Flex flexDirection={{ md: "row", base: "column" }} h={"100vh"}>
        <VStack
          as={"nav"}
          position={"sticky"}
          w={sbMinimize ? "32" : "60"}
          transition={"all ease-in-out .5s"}
          //   bgColor={"cyan.500"}
          display={{ md: "flex", base: "none" }}
        >
          <Center h={"16"}>
            <Text fontSize={"4xl"}>
              AL
              <Text as={"span"} fontWeight={"thin"} color="cyan.800">
                CHI
              </Text>
            </Text>
          </Center>
          <Box>
            <Container>
              <InputGroup>
                <Input placeholder="Search..." />
                <InputRightElement
                  children={<Icon as={MdOutlineSearch} w="6" h="6" />}
                />
              </InputGroup>
            </Container>
          </Box>
          <VStack
            w={"full"}
            justifyContent={sbMinimize ? "center" : "flex-start"}
          >
            <Container>
              <Box w={"full"} my={"2"}>
                <Text colorScheme={"whiteAlpha"}>Dashboard</Text>
              </Box>
              <LinkBox py={"2"} borderRight={"2px"} borderColor="cyan.200">
                <LinkOverlay href="/">
                  <HStack as={"span"}>
                    <Icon as={MdOutlineHome} w="6" h="6" />
                    <Text as={"span"} wordBreak={"break-all"}>
                      Dashboard
                    </Text>
                  </HStack>
                </LinkOverlay>
              </LinkBox>
            </Container>
          </VStack>
        </VStack>
        <Box
          as={"nav"}
          display={{ md: "none", base: "flex" }}
          flexWrap={"nowrap"}
          w={"full"}
          h="14"
          shadow={"md"}
        >
          <Container display={"flex"} alignItems="center">
            <HStack flex={1}>
              <Text as={"span"}>ALCHI</Text>
              <Spacer />
              <IconButton
                aria-label="Profile"
                // colorScheme=""
                bgColor={"transparent"}
                rounded={"full"}
                icon={<MdPerson />}
              ></IconButton>
              <IconButton
                aria-label="Menu"
                // colorScheme="teal"
                bgColor={"transparent"}
                rounded={"full"}
                icon={<MdOutlineMenu />}
              ></IconButton>
            </HStack>
          </Container>
        </Box>
        <Flex flex={1} bgColor={colorMode !== "dark" ? "gray.50" : "gray.900"}>
          <Container maxW={{ md: "container.xl", base: "md" }}>
            <HStack display={{ base: "none", md: "flex" }} h={"16"}>
              {!sbMinimize ? (
                <IconButton
                  onClick={() => setSbMinimize(true)}
                  aria-label="Minimize-sb"
                  // colorScheme=""
                  bgColor={"transparent"}
                  rounded={"full"}
                  icon={<MdArrowBackIos />}
                ></IconButton>
              ) : (
                <IconButton
                  onClick={() => setSbMinimize(false)}
                  aria-label="Maximize-sb"
                  // colorScheme=""
                  bgColor={"transparent"}
                  rounded={"full"}
                  icon={<MdArrowForwardIos />}
                ></IconButton>
              )}
              <Spacer />
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="dark-mode" mb="0">
                  Dark Mode
                </FormLabel>
                <Switch
                  onChange={toggleColorMode}
                  //   color="gray.200"
                  colorScheme="whiteAlpha"
                  id="dark-mode"
                />
              </FormControl>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<MdNotifications />}
                  bgColor={"transparent"}
                  rounded={"full"}
                />
                {/* <IconButton
                      aria-label="Profile"
                      // colorScheme=""
                      bgColor={"transparent"}
                      rounded={"full"}
                      icon={<MdNotifications />}
                    /> */}
                <MenuList>
                  <MenuGroup title="Notification">
                    <MenuItem>
                      <Box>
                        <HStack>
                          <Text>your spending exceeds the limit</Text>
                          <Spacer />
                          &nbsp;
                          <Tag
                            size={"sm"}
                            variant={"solid"}
                            colorScheme={"red"}
                          >
                            NEW!
                          </Tag>{" "}
                        </HStack>
                        <Text as={"sub"}>05-08-2022</Text>
                      </Box>
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
              <IconButton
                aria-label="Profile"
                // colorScheme=""
                bgColor={"transparent"}
                rounded={"full"}
                icon={<MdPerson />}
              ></IconButton>
              <IconButton
                aria-label="Menu"
                // colorScheme="teal"
                bgColor={"transparent"}
                rounded={"full"}
                icon={<MdOutlineMenu />}
              ></IconButton>
            </HStack>
            <Outlet />
          </Container>
        </Flex>
      </Flex>
    </>
  );
};

export default PagesLayout;
