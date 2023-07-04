import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { FlatList, Pressable } from "react-native";
import { Layout, MovieCard } from "../components";
import { Movie, NavigationParamList } from "../types";

interface Props {
  navigation: StackNavigationProp<NavigationParamList, "Home">;
}

export default function HomeScreen({ navigation }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState<Array<Movie>>([]);

  useEffect(() => {
    let movies = [];

    switch (currentPage) {
      case 1:
        movies = require("../api/CONTENTLISTINGPAGE-PAGE1.json").page[
          "content-items"
        ].content;
        break;
      case 2:
        movies = require("../api/CONTENTLISTINGPAGE-PAGE2.json").page[
          "content-items"
        ].content;
        break;
      case 3:
        movies = require("../api/CONTENTLISTINGPAGE-PAGE3.json").page[
          "content-items"
        ].content;
        break;
    }

    setMovies((currentMovies) => [...currentMovies, ...movies]);
  }, [currentPage]);

  return (
    <Layout>
      <FlatList
        data={movies}
        numColumns={3}
        renderItem={({ item: movie, index }) => {
          return (
            <Pressable
              key={index}
              onPress={() => navigation.navigate("Details", movie)}
            >
              <MovieCard data={movie} />
            </Pressable>
          );
        }}
        onEndReached={() => {
          setCurrentPage(currentPage + 1);
        }}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{ paddingBottom: 30, rowGap: 30 }}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
      />
    </Layout>
  );
}
