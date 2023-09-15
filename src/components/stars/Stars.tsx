import Star from "../star/Star";
import { Film, Films } from "../../types/types";
import { FC } from "react";

type Test = {
  films: Films;
};

export default function Stars({ films }: Test) {
  console.log(films);
  return (
    <ul>
      {films.map((el: number, id: number) => (
        <Star key={id} />
      ))}
    </ul>
  );
}

/* <ul>
      {films.map((el: number) => (
        <Star key={el} />
      ))}
    </ul>*/
