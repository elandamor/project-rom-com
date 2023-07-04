import { Image, StyleSheet, Text, View } from "react-native";
import { windowWidth } from "../../constants";
import slices from "../../slices";
import { Movie } from "../../types";

const cardWidth = windowWidth / 3 - 15;

export default function MovieCard({ data }: { data: Movie }) {
  const imageSource = slices[data["poster-image"].replace(".jpg", "")];
  const placeholderSource = slices["placeholderPoster"];

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={imageSource ?? placeholderSource}
        style={styles.image}
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

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    margin: 5,
    width: cardWidth,
  },
  image: {
    height: cardWidth * 1.5,
    width: cardWidth,
  },
});
