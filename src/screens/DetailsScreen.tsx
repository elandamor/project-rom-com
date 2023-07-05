import { RouteProp } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, View } from "react-native";
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
        <View style={{ bottom: 0, position: "absolute", paddingVertical: 12 }}>
          <Text
            style={{
              color: "#fff",
              fontFamily: "TitilliumWeb_700Bold",
              fontSize: 22,
              textAlign: "center",
            }}
          >
            {params.name}
          </Text>
          <Text
            style={{
              color: "#fff",
              fontFamily: "TitilliumWeb_400Regular",
              fontSize: 12,
              marginVertical: 6,
              opacity: 0.8,
              textAlign: "center",
            }}
          >
            {new Date().getFullYear()} | Romantic Comedy
          </Text>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              marginHorizontal: 12,
              marginVertical: 12,
              paddingHorizontal: 24,
              paddingVertical: 12,
              width: windowWidth - 24,
            }}
          >
            <Text
              style={{
                color: Colors.background,
                fontFamily: "TitilliumWeb_600SemiBold",
                textAlign: "center",
              }}
            >
              Watch Now
            </Text>
          </View>
        </View>
      </View>
    </Layout>
  );
}
