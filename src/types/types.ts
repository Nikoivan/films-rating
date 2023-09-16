export type Film = {
  name: string;
  price: number;
  imgUrl: string;
  starsCount: number;
};

export type Films = Film[];

export type StarsProps = {
  films: Films;
};
