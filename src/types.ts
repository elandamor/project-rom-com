export type NavigationParamList = {
  Landing: undefined;
  Home: undefined;
  Details: Movie;
};

export type Movie = {
  name: string;
  "poster-image": string;
};
