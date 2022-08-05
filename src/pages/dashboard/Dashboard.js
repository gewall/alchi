import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  HStack,
  Icon,
  Spacer,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import { BiLineChart, BiLineChartDown } from "react-icons/bi";
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
            y: 0,
          },
          {
            x: new Date().setDate(4),
            y: 2000,
          },
          {
            x: new Date(),
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
        flexDir={{ md: "row", base: "column" }}
        // alignItems={"center"}
        //   w={"100%"}
        flex={1}
        // justifyContent={"space-between"}
      >
        <VStack
          flex={1}
          justifyContent={"space-between"}
          mr={{ base: 0, md: 4 }}
        >
          <HStack
            justifyContent={{ base: "space-evenly", md: "flex-start" }}
            w={"100%"}
          >
            <Card flex={1}>
              <Box
                bgColor={isDark ? "cyan.600" : "cyan.300"}
                p={"4"}
                rounded={"md"}
              >
                <Icon as={BiLineChart} w={"6"} h={"6"} />
              </Box>
              <VStack>
                <Text>Total earnings</Text>
                <Text as={"sample"}>{formatter.format(2000)}</Text>
              </VStack>
            </Card>

            <Card flex={1}>
              <Box
                bgColor={isDark ? "red.600" : "red.300"}
                p={"4"}
                rounded={"md"}
              >
                <Icon as={BiLineChartDown} w={"6"} h={"6"} />
              </Box>
              <VStack>
                <Text>Total spending</Text>
                <Text as={"sample"}>{formatter.format(1000)}</Text>
              </VStack>
            </Card>
          </HStack>
          <HStack
            justifyContent={{ base: "space-evenly", md: "flex-start" }}
            w={"100%"}
          >
            <Card flex={1}>
              <Box
                bgColor={isDark ? "green.600" : "green.300"}
                p={"4"}
                rounded={"md"}
              >
                <Icon as={BiLineChart} w={"6"} h={"6"} />
              </Box>
              <VStack>
                <Text>earnings Goals</Text>
                <Text as={"sample"}>{formatter.format(3000)}</Text>
              </VStack>
            </Card>

            <Card flex={1}>
              <Box
                bgColor={isDark ? "yellow.600" : "yellow.300"}
                p={"4"}
                rounded={"md"}
              >
                <Icon as={BiLineChartDown} w={"6"} h={"6"} />
              </Box>
              <VStack>
                <Text>spending Goals</Text>
                <Text as={"sample"}>{formatter.format(1000)}</Text>
              </VStack>
            </Card>
          </HStack>
        </VStack>
        {/* <Spacer /> */}
        <Box
          flex={1}
          my={{ base: "2", md: "0" }}
          w={{ base: "full", md: "lg" }}
        >
          <Card flexDir={"column"}>
            <Text>Earning & Spending Activity</Text>
            <Chart
              options={stateEA.options}
              series={stateEA.series}
              type="area"
            />
          </Card>
        </Box>
      </Flex>
      <HStack my={{ base: 0, md: 4 }}>
        <Box>
          <Card flexDir={"column"}>
            <Text>Tasks</Text>
            <Chart
              options={stateTask.options}
              series={stateTask.series}
              type="donut"
            />
          </Card>
        </Box>
      </HStack>
    </Flex>
  );
};

export default Dashboard;
