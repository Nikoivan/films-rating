import Star from "../star/Star";
import { Film, StarsProps } from "../../types/types";
import { FC } from "react";

export default function Stars({ films }: StarsProps) {
  return (
    <ul className="card-body-stars">
      {films.map(
        (el, idx) =>
          el.starsCount >= 1 && el.starsCount <= 5 && <Star key={idx} />
      )}
    </ul>
  );
}
