import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Center, Heading, HStack } from "native-base";
import { PropsWithChildren, useState } from "react";
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, windowWidth } from "../../constants";
import Search from "./Search";

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
      <HStack
        alignItems="center"
        backgroundColor={Colors.background}
        paddingX={2}
        minHeight={16}
        width={windowWidth}
        zIndex={5}
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
        <Center justifyContent="flex-start">
          <Heading
            style={{
              paddingHorizontal: 8,
              width: "100%",
            }}
            fontSize={20}
            fontWeight={400}
            numberOfLines={1}
          >
            {title}
          </Heading>
        </Center>
        {showSearch && (
          <Search
            onOpen={() => setSearchOpen(true)}
            onClose={() => setSearchOpen(false)}
            onChangeText={setSearchTerm}
          />
        )}
      </HStack>
      {children}
    </SafeAreaView>
  );
}
