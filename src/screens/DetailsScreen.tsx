import { RouteProp } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Box, Button, Heading, Text } from "native-base";
import { Image, View } from "react-native";
import { Layout } from "../components";
import { Colors, windowWidth } from "../constants";
import slices from "../slices";
import { NavigationParamList } from "../types";

interface Props {
  route: RouteProp<NavigationParamList, "Details">;
}

export default function DetailsScreen({ route }: Props) {
  const params = route.params;

  return (
    <Layout canGoBack>
      <View
        style={{ marginTop: -64, position: "relative", width: windowWidth }}
      >
        <Image
          source={slices[params["poster-image"].replace(".jpg", "")]}
          style={{
            height: windowWidth,
            width: windowWidth,
          }}
        />
        <LinearGradient
          colors={["transparent", Colors.background]}
          style={{
            bottom: 0,
            left: 0,
            position: "absolute",
            top: 0,
            width: windowWidth,
          }}
        />
        <Box bottom={0} paddingX={3} position="absolute" width={windowWidth}>
          <Heading fontSize={22} textAlign="center">
            {params.name}
          </Heading>
          <Text fontSize={12} fontWeight={400} opacity={0.8} textAlign="center">
            {new Date().getFullYear()} | Romantic Comedy
          </Text>
          <Button marginY={4}>Watch Now</Button>
        </Box>
      </View>
    </Layout>
  );
}
