import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { theme } from "./libs/services";
import { AppRouter } from "./routes";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRouter />
    </ChakraProvider>
  );
}

export default App;

