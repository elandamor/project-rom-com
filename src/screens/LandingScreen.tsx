import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Center, Heading, Text } from "native-base";
import { Image } from "react-native";
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
      <Center flex={1}>
        <Image
          source={slices.movieIcon}
          style={{ height: 100, marginLeft: 24, width: 100 }}
        />
        <Heading fontSize={22} paddingTop={6}>
          RomCom
        </Heading>
        <Text fontWeight={400}>Watch the best romentic comedies</Text>
        <Button marginTop={6} onPress={() => navigation.navigate("Home")}>
          Discover Movies
        </Button>
      </Center>
    </SafeAreaView>
  );
}
