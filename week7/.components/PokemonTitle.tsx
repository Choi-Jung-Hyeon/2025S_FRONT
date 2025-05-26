// .components/PokemonTitle.tsx
"use client";

export default function PokemonTitle() {
  const handleClick = () => {
    alert("Pokemon List Clicked!");
  };

  return (
    <div className="under">
      <h1 className="titleText" onClick={handleClick}>
        Pokemon List
      </h1>
    </div>
  );
}