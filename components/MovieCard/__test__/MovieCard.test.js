import React from "react";
import renderer from "react-test-renderer";

import MovieCard from "../index";

const testData = { name: "Rear Window", "poster-image": "poster2.jpg" };

describe("<MovieCard />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<MovieCard data={testData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 2 children", () => {
    const tree = renderer.create(<MovieCard data={testData} />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});
