import { Image, Text, View } from "react-native";
import { windowWidth } from "../../constants";
import slices from "../../slices";
import { Movie } from "../../types";

const cardWidth = windowWidth / 3 - 15;

export default function MovieCard({ data }: { data: Movie }) {
  const imageSource = slices[data["poster-image"].replace(".jpg", "")];
  const placeholderSource = slices["placeholderPoster"];

  return (
    <View
      style={{
        alignItems: "flex-start",
        margin: 5,
        width: cardWidth,
      }}
    >
      <Image
        resizeMode="contain"
        source={imageSource ?? placeholderSource}
        style={{
          height: cardWidth * 1.5,
          width: cardWidth,
        }}
      />
      <Text
        style={{
          color: "#fff",
          fontFamily: "TitilliumWeb_300Light",
          marginTop: 12,
        }}
        numberOfLines={1}
      >
        {data.name}
      </Text>
    </View>
  );
}
