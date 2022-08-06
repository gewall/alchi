import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Flex,
  HStack,
  Icon,
  Spacer,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import {
  BiLineChart,
  BiLineChartDown,
  BiUpArrowAlt,
  BiDownArrowAlt,
  BiWallet,
  BiDollar,
} from "react-icons/bi";
import { useCurrency } from "../../libs/hooks";
import { Card } from "../../components";

const Dashboard = () => {
  const { colorMode } = useColorMode();
  const formatter = useCurrency();

  const isDark = colorMode === "dark" ? true : false;

  const stateEA = {
    options: {
      chart: {
        id: "activity",
        width: "100%",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        labels: {
          formatter: (val) => formatter.format(val),
        },
      },
    },
    series: [
      {
        name: "Activity",
        data: [
          {
            x: new Date().setDate(3),
            y: 500,
          },
          {
            x: new Date().setDate(4),
            y: 2000,
          },
          {
            x: new Date().setDate(5),
            y: 1000,
          },
        ],
      },
    ],
  };

  const stateTask = {
    options: {
      chart: {
        id: "tasks",
        width: "100%",
      },
      // xaxis: {
      //   type: "datetime",
      // },
      // yaxis: {
      //   labels: {
      //     formatter: (val) => formatter.format(val),
      //   },
      // },
      labels: ["Completed", "Uncompleted"],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                label: "Total",
              },
            },
          },
        },
      },
    },
    series: [6, 4],
  };

  return (
    <Flex flexDir={"column"}>
      <Box mb={"2"} mt={{ base: "2", md: "0" }}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to={`/`}>
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>

      <Flex
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        // w={"full"}
        flex={1}
        flexWrap={{ base: "wrap", md: "nowrap" }}
      >
        <Flex flexDir={"column"} flex={1} mr={{ base: 0, md: 2 }}>
          <Flex
            // spacing={2}
            // justifyContent={{ base: "space-between", md: "flex-start" }}
            // w={"full"}
            // flex={1}
            flexDir={{ base: "column", md: "row" }}
            // flexGrow={1}
          >
            <Box minW={{ base: "full", md: "40" }}>
              <Card flexDir={"column"}>
                <HStack>
                  <Flex
                    bgColor={isDark ? "cyan.600" : "cyan.200"}
                    p={"2"}
                    rounded={"md"}
                  >
                    <Icon
                      as={BiWallet}
                      w={"6"}
                      h={"6"}
                      color={isDark ? "cyan.200" : "cyan.600"}
                    />
                  </Flex>
                  <Spacer />
                  <Flex alignItems={"center"}>
                    <Text color={"green.400"}>+42%</Text>
                    <Icon as={BiUpArrowAlt} color={"green.400"} />
                  </Flex>
                </HStack>
                <VStack alignItems={"flex-start"} my={2}>
                  <Text fontSize={"xl"}>{formatter.format(2000)}</Text>
                  <Text as={"sub"}>Total Balance</Text>
                </VStack>
              </Card>
            </Box>
            <Box mx={{ base: 0, md: 1 }} mb={{ base: 1, md: 10 }} />
            <Box minW={{ base: "full", md: "40" }}>
              <Card flexDir={"column"}>
                <HStack>
                  <Flex
                    bgColor={isDark ? "green.600" : "green.200"}
                    p={"2"}
                    rounded={"md"}
                  >
                    <Icon
                      as={BiLineChart}
                      w={"6"}
                      h={"6"}
                      color={isDark ? "green.200" : "green.600"}
                    />
                  </Flex>
                  <Spacer />
                  <Flex alignItems={"center"}>
                    <Text color={"green.400"}>+12%</Text>
                    <Icon as={BiUpArrowAlt} color={"green.400"} />
                  </Flex>
                </HStack>
                <VStack alignItems={"flex-start"} my={2}>
                  <Text fontSize={"xl"}>{formatter.format(500)}</Text>
                  <Text as={"sub"}>Total Profit (Week)</Text>
                </VStack>
              </Card>
            </Box>
            <Box mx={{ base: 0, md: 1 }} mb={{ base: 1, md: 0 }} />
            <Box minW={{ base: "full", md: "40" }}>
              <Card flexDir={"column"}>
                <HStack>
                  <Flex
                    bgColor={isDark ? "red.600" : "red.200"}
                    p={"2"}
                    rounded={"md"}
                  >
                    <Icon
                      as={BiLineChartDown}
                      w={"6"}
                      h={"6"}
                      color={isDark ? "red.200" : "red.600"}
                    />
                  </Flex>
                  <Spacer />
                  <Flex alignItems={"center"}>
                    <Text color={"red.400"}>-5%</Text>
                    <Icon as={BiDownArrowAlt} color={"red.400"} />
                  </Flex>
                </HStack>
                <VStack alignItems={"flex-start"} my={2}>
                  <Text fontSize={"xl"}>{formatter.format(200)}</Text>
                  <Text as={"sub"}>Total Loss (Month)</Text>
                </VStack>
              </Card>
            </Box>
            <Box mx={{ base: 0, md: 1 }} mb={{ base: 1, md: 10 }} />
            <Box minW={{ base: "full", md: "40" }}>
              <Card flexDir={"column"}>
                <HStack>
                  <Flex
                    bgColor={isDark ? "yellow.600" : "yellow.200"}
                    p={"2"}
                    rounded={"md"}
                  >
                    <Icon
                      as={BiDollar}
                      w={"6"}
                      h={"6"}
                      color={isDark ? "yellow.200" : "yellow.600"}
                    />
                  </Flex>
                  <Spacer />
                  <Flex alignItems={"center"}>
                    <Text color={"green.400"}>+5%</Text>
                    <Icon as={BiUpArrowAlt} color={"green.400"} />
                  </Flex>
                </HStack>
                <VStack alignItems={"flex-start"} my={2}>
                  <Text fontSize={"xl"}>{formatter.format(50)}</Text>
                  <Text as={"sub"}>Total Sales (Day)</Text>
                </VStack>
              </Card>
            </Box>
          </Flex>

          <HStack
            my={{ base: 0, md: 2 }}
            // minH={"xs"}
            flexDir={{ base: "column", md: "row" }}
            flex={1}
          >
            <Box
              flex={1}
              my={{ base: "2", md: "0" }}
              // w={{ base: "full", md: "full" }}
            >
              <Card flexDir={"column"}>
                <Text>Sales Analytic</Text>
                <Chart
                  options={stateEA.options}
                  series={stateEA.series}
                  type="bar"
                />
              </Card>
            </Box>
            {/* 
        <Box
          flex={1}
          my={{ base: "2", md: "0" }}
          // w={{ base: "full", md: "lg" }}
        >
          <Card flexDir={"column"}>
            <Text>Tasks</Text>
            <Chart
              options={stateTask.options}
              series={stateTask.series}
              type="donut"
            />
          </Card>Flex
        </Box> */}
          </HStack>
        </Flex>
        {/* <Spacer /> */}
        <Flex flex={1} flexDir={"column"}>
          <Box flex={1}>
            <Card flexDir={"column"}>
              <Box>
                <Text>Top Sold</Text>
              </Box>
              <Divider my={"2"} borderWidth={"thin"} />
              <TableContainer w={"full"}>
                <Table variant={"simple"} size={"sm"}>
                  <TableCaption>Top Sold Item</TableCaption>
                  <Thead>
                    <Tr>
                      <Th isNumeric>No</Th>
                      <Th>Name</Th>
                      <Th isNumeric>Total</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>1</Td>
                      <Td>Coca - Cola</Td>
                      <Td isNumeric>5</Td>
                    </Tr>
                    <Tr>
                      <Td>2</Td>
                      <Td>Sprite</Td>
                      <Td isNumeric>7</Td>
                    </Tr>
                    <Tr>
                      <Td>3</Td>
                      <Td>Redbull</Td>
                      <Td isNumeric>10</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Card>
          </Box>

          <Box flex={1} mt={2}>
            <Card flexDir={"column"}>
              <Box>
                <Text>Top Member</Text>
              </Box>
              <Divider my={"2"} borderWidth={"thin"} />
              <TableContainer w={"full"}>
                <Table variant={"simple"} size={"sm"}>
                  <TableCaption>Top Member</TableCaption>
                  <Thead>
                    <Tr>
                      <Th isNumeric>No</Th>
                      <Th>Name</Th>
                      <Th isNumeric>Phone</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>1</Td>
                      <Td>John Doe</Td>
                      <Td isNumeric>0987654321</Td>
                    </Tr>
                    <Tr>
                      <Td>2</Td>
                      <Td>Wowo</Td>
                      <Td isNumeric>0987654321</Td>
                    </Tr>
                    <Tr>
                      <Td>3</Td>
                      <Td>Burnok</Td>
                      <Td isNumeric>0987654321</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Card>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
