import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  ...config,
  fonts: { heading: `'Open Sans', sans-serif`, body: `'Raleway', sans-serif` },
});

export default theme;
