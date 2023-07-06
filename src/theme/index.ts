import { extendTheme } from "native-base";

export default extendTheme({
  colors: {
    background: "#171717",
    white: {
      50: "#FFF",
      100: "#FFF",
      200: "#FFF",
      300: "#FFF",
      400: "#FFF",
      500: "#FFF",
      600: "#FFF",
      700: "#FFF",
      800: "#FFF",
      900: "#FFF",
    },
  },
  components: {
    Button: {
      baseStyle: {
        rounded: 12,
      },
      defaultProps: {
        colorScheme: "white",
        px: 6,
        py: 3,
        _text: {
          color: "#171717",
          fontWeight: 600,
          textAlign: "center",
        },
      },
    },
    Heading: {
      defaultProps: {
        color: "#fff",
        fontWeight: 600,
      },
    },
    Text: {
      defaultProps: {
        color: "#fff",
        fontWeight: 300,
      },
    },
  },
  fontConfig: {
    TitilliumWeb: {
      300: {
        normal: "TitilliumWeb_300Light",
      },
      400: {
        normal: "TitilliumWeb_400Regular",
      },
      600: {
        normal: "TitilliumWeb_600SemiBold",
      },
      700: {
        normal: "TitilliumWeb_700Bold",
      },
    },
  },

  fonts: {
    heading: "TitilliumWeb",
    body: "TitilliumWeb",
  },
});
