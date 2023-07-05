import { StackNavigationProp } from "@react-navigation/stack";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants";
import slices from "../slices";
import { NavigationParamList } from "../types";

interface Props {
  navigation: StackNavigationProp<NavigationParamList, "Landing">;
}

export default function LandingScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.background, flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={slices.movieIcon}
          style={{ height: 100, marginLeft: 24, width: 100 }}
        />
        <Text
          style={{
            color: "#fff",
            fontFamily: "TitilliumWeb_600SemiBold",
            fontSize: 22,
            paddingTop: 12,
          }}
        >
          RomCom
        </Text>
        <Text
          style={{
            color: "#fff",
            fontFamily: "TitilliumWeb_400Regular",
            paddingTop: 12,
          }}
        >
          Watch the best romentic comedies
        </Text>
        <Pressable
          style={{ marginTop: 12 }}
          onPress={() => navigation.navigate("Home")}
          r
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              marginHorizontal: 12,
              marginVertical: 12,
              paddingHorizontal: 24,
              paddingVertical: 12,
            }}
          >
            <Text
              style={{
                color: Colors.background,
                fontFamily: "TitilliumWeb_600SemiBold",
                textAlign: "center",
              }}
            >
              Discover Movies
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
