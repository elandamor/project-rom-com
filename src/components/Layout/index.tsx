import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Fragment, PropsWithChildren, useRef, useState } from "react";
import {
  Animated,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, windowWidth } from "../../constants";

interface Props extends PropsWithChildren {
  title?: string;
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
  canGoBack?: boolean;
  showSearch?: boolean;
}

export default function Layout({
  canGoBack,
  children,
  title,
  showSearch,
  setSearchTerm,
}: Props) {
  const { goBack } = useNavigation();
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.background,
      }}
    >
      <View
        style={{
          alignItems: "center",
          backgroundColor: Colors.background,
          flexDirection: "row",
          minHeight: 64,
          paddingHorizontal: 8,
          width: windowWidth,
          zIndex: 5,
        }}
      >
        <Pressable
          disabled={isSearchOpen}
          onPress={canGoBack ? goBack : () => null}
          style={{
            alignItems: "center",
            borderRadius: 40,
            height: 40,
            justifyContent: "center",
            width: 40,
          }}
        >
          {canGoBack && <Feather name="arrow-left" color="#fff" size={24} />}
        </Pressable>
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
              fontSize: 20,
              paddingHorizontal: 8,
              textAlign: "left",
              width: "100%",
            }}
            numberOfLines={1}
          >
            {title}
          </Text>
        </View>
        {showSearch && (
          <Search
            onOpen={() => setSearchOpen(true)}
            onClose={() => setSearchOpen(false)}
            onChangeText={setSearchTerm}
          />
        )}
      </View>
      {children}
    </SafeAreaView>
  );
}

function Search({
  onChangeText,
  onClose,
  onOpen,
  isOpen,
}: {
  onOpen: () => void;
  onClose: () => void;
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
      onOpen();
    });
  };

  const slideOut = () => {
    onChangeText("");
    Keyboard.dismiss();

    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 195,
      useNativeDriver: true,
    }).start(() => {
      inputRef.current.clear();
      onClose();
    });
  };

  return (
    <Fragment>
      <View style={{ height: 40, width: 40 }} />
      <Animated.View
        style={{
          left: 56,
          position: "absolute",
        }}
      >
        <Animated.View
          style={{
            left: -48,
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
              right: -44,
              width: 40,
              zIndex: 1,
            }}
          >
            <Feather name="search" color="#fff" size={24} />
          </Pressable>
        </Animated.View>
        <Animated.View
          style={{
            backgroundColor: Colors.background,
            transform: [
              {
                translateX: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [windowWidth, -48],
                }),
              },
            ],
          }}
        >
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
            placeholder="Search for movie by name"
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
      </Animated.View>
    </Fragment>
  );
}
