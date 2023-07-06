import { Feather } from "@expo/vector-icons";
import { Center } from "native-base";
import { Fragment, useRef } from "react";
import { Animated, Keyboard, Pressable, TextInput } from "react-native";
import { Colors, windowWidth } from "../../constants";

export default function Search({
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
          <Center boxSize={10} position="absolute" zIndex={2}>
            <Feather name="search" color="#000" size={24} />
          </Center>
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
