import { Text, VStack } from "native-base";
import { Image } from "react-native";
import { windowWidth } from "../../constants";
import slices from "../../slices";
import { Movie } from "../../types";

const cardWidth = windowWidth / 3 - 15;

export default function MovieCard({ data }: { data: Movie }) {
  const imageSource = slices[data["poster-image"].replace(".jpg", "")];
  const placeholderSource = slices["placeholderPoster"];

  return (
    <VStack margin={1} width={cardWidth}>
      <Image
        resizeMode="contain"
        source={imageSource ?? placeholderSource}
        style={{
          height: cardWidth * 1.5,
          width: cardWidth,
        }}
      />
      <Text marginTop={3} numberOfLines={1}>
        {data.name}
      </Text>
    </VStack>
  );
}
