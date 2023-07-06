import { render, screen } from "@testing-library/react-native";
import { NativeBaseProvider } from "native-base";
import React from "react";

import MovieCard from "../index";

const testData = { name: "Rear Window", "poster-image": "poster2.jpg" };
const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

describe("<MovieCard />", () => {
  it("renders correctly", () => {
    render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <MovieCard data={testData} />
      </NativeBaseProvider>
    );

    expect(screen.getByTestId("movie-poster")).toBeTruthy();
    expect(screen.getByTestId("movie-name")).toBeTruthy();

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
