type ApplicationState = {
  selectedTrainer: Trainer;
  trainers: Trainer[];
};

type Options = {
  label: string;
  value: string;
};

type Pokemon = {
  id: string;
  baseExperience: number;
  height: number;
  name: string;
  nickname: string;
  weight: number;
};

type PokemonList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResults[];
};

type PokemonResults = {
  name: string;
  url: string;
};

type PokemonRegistration = Pick<Pokemon, "id", "name">;

type Trainer = {
  id: string;
  gender: string;
  name: string;
  rank: Rankings;
  pokemon: Pokemon[];
};

type Rankings =
  | "Beginner"
  | "Great"
  | "Expert"
  | "Veteran"
  | "Ultra"
  | "Master";
type TrainerTable = Pick<Trainer, "id" | "name" | "rank">;
type TrainerWithoutIdAndPokemon = Omit<Trainer, "id" | "pokemon">;
