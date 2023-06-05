import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";
import { FC } from "react";

interface Props{
    pokemonFavorite: number[]
}

export const FavoritePokemos: FC<Props> = ({pokemonFavorite}) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemonFavorite.map((id) => (
        <FavoriteCardPokemon 
        id={id}
        key={id} 
            
        />
      ))}
    </Grid.Container>
  );
};
