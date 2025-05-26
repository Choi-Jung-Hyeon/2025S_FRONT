// .components/PokemonItem.tsx
"use client";

import dynamic from "next/dynamic";

const NextImage = dynamic(() => import("next/image"), { ssr: false });

interface PokemonItemProps {
  id: string;
  image: string;
  name: string;
  height: string;
  weight: string;
  types: string[];
  onClick?: () => void;
}

export default function PokemonItem(props: PokemonItemProps) {
  return (
    <div className="item" onClick={props.onClick}>
      <NextImage
        src={props.image}
        alt={props.name}
        width={100}
        height={100}
        unoptimized
        className="item-img"
      />
      <div className="item-info">
        <h2 className="item-h2">{props.name}</h2>
        <p className="item-p">height: {props.height}dm</p>
        <p className="item-p">weight: {props.weight}hg</p>
        <p className="item-p">types: {props.types.join(", ")}</p>
      </div>
    </div>
  );
}