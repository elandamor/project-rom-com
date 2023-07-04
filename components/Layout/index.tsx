import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { PropsWithChildren } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { windowWidth } from "../../constants";

interface Props extends PropsWithChildren {
  canGoBack?: boolean;
}

export default function Layout({ canGoBack, children }: Props) {
  const { goBack } = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#171717",
          flexDirection: "row",
          minHeight: 64,
          paddingHorizontal: 8,
          width: windowWidth,
          zIndex: 5,
        }}
      >
        {canGoBack && (
          <Pressable
            onPress={goBack}
            style={{
              alignItems: "center",
              borderRadius: 40,
              height: 40,
              justifyContent: "center",
              width: 40,
            }}
          >
            <Feather name="arrow-left" color="white" size={24} />
          </Pressable>
        )}
      </View>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
  },
});
