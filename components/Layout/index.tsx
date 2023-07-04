import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Fragment, PropsWithChildren, useRef, useState } from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { windowWidth } from "../../constants";

interface Props extends PropsWithChildren {
  canGoBack?: boolean;
  title?: string;
  showSearch?: boolean;
}

export default function Layout({
  canGoBack,
  children,
  title,
  showSearch,
}: Props) {
  const { goBack } = useNavigation();
  const [isSearchOpen, setSearchOpen] = useState(false);

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
        {!isSearchOpen && (
          <Pressable
            onPress={canGoBack ? goBack : () => null}
            style={{
              alignItems: "center",
              borderRadius: 40,
              height: 40,
              justifyContent: "center",
              width: 40,
            }}
          >
            {canGoBack && <Feather name="arrow-left" color="white" size={24} />}
          </Pressable>
        )}
        <View
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "TitilliumWeb_400Regular",
              fontSize: 18,
            }}
          >
            {title}
          </Text>
        </View>
        {showSearch && <Search onOpen={() => setSearchOpen(true)} />}
      </View>
      {children}
    </SafeAreaView>
  );
}

function Search({
  onChangeText,
  onOpen,
  isOpen,
}: {
  onOpen: () => void;
  onChangeText?: (text: string) => void;
  isOpen?: boolean;
}) {
  const inputRef = useRef<TextInput>();
  const slideAnim = useRef(new Animated.Value(0)).current;

  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 195,
      useNativeDriver: true,
    }).start(() => {
      inputRef.current.focus();
    });
  };

  const slideOut = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 195,
      useNativeDriver: true,
    }).start(() => {
      inputRef.current.clear();
    });
  };

  return (
    <Fragment>
      <View style={{ height: 40, width: 40 }} />
      <View
        style={{
          left: 12,
          position: "absolute",
        }}
      >
        <Animated.View
          style={{
            backgroundColor: "#171717",
            transform: [
              {
                translateX: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [windowWidth, 0],
                }),
              },
            ],
          }}
        >
          <Animated.View
            style={{
              opacity: slideAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
              }),
            }}
          >
            <Pressable
              onPress={slideIn}
              disabled={isOpen}
              style={{
                alignItems: "center",
                borderRadius: 40,
                height: 40,
                justifyContent: "center",
                position: "absolute",
                right: windowWidth - 40,
                width: 40,
                zIndex: 1,
              }}
            >
              <Feather name="search" color="#fff" size={24} />
            </Pressable>
          </Animated.View>
          <View
            style={{
              alignItems: "center",
              borderRadius: 40,
              height: 40,
              justifyContent: "center",
              position: "absolute",
              width: 40,
              zIndex: 2,
            }}
          >
            <Feather name="search" color="#000" size={24} />
          </View>
          <TextInput
            ref={inputRef}
            onChangeText={onChangeText}
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              fontFamily: "TitilliumWeb_400Regular",
              height: 40,
              paddingLeft: 40,
              paddingRight: 12,
              width: windowWidth - 64,
            }}
            keyboardType="web-search"
          />
          <Pressable
            onPress={slideOut}
            style={{
              alignItems: "center",
              borderRadius: 40,
              height: 40,
              justifyContent: "center",
              position: "absolute",
              right: -46,
              width: 40,
              zIndex: 2,
            }}
          >
            <Feather name="x" color="#FFF" size={24} />
          </Pressable>
        </Animated.View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
  },
});
