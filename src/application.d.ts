type Options = {
  label: string;
  value: string;
};

type Pokemon = {
  id: number;
  baseExperience: number;
  height: number;
  name: string;
  pokemonName: string;
  weight: number;
};

type PokemonRegistration = Pick<Pokemon, "id", "name">;

type Trainer = {
  id: number;
  gender: string;
  name: string;
  rank: Rankings;
};

type Rankings =
  | "Beginner"
  | "Great"
  | "Expert"
  | "Veteran"
  | "Ultra"
  | "Master";
type TrainerRegistration = Pick<Trainer, "gender" | "name" | "rank">;
type TrainerTable = Pick<Trainer, "id" | "name" | "rank">;
