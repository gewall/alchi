import { useColorMode } from "@chakra-ui/react";

const withColorMode = (Component) => {
  const ColorMode = (props) => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark" ? true : false;

    return <Component isDark={isDark} {...props} />;
  };

  return ColorMode;
};

export default withColorMode;
