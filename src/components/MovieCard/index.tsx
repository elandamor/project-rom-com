import { Box, Text } from "native-base";
import { Image } from "react-native";
import { windowWidth } from "../../constants";
import slices from "../../slices";
import { Movie } from "../../types";

const cardWidth = windowWidth / 3 - 15;

export default function MovieCard({ data }: { data: Movie }) {
  const imageSource = slices[data["poster-image"].replace(".jpg", "")];
  const placeholderSource = slices["placeholderPoster"];

  return (
    <Box margin={1} width={cardWidth}>
      <Image
        testID="movie-poster"
        resizeMode="contain"
        source={imageSource ?? placeholderSource}
        style={{
          height: cardWidth * 1.5,
          width: cardWidth,
        }}
      />
      <Text testID="movie-name" marginTop={3} numberOfLines={1}>
        {data.name}
      </Text>
    </Box>
  );
}
