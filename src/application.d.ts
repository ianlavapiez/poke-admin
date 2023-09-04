type ApplicationState = {
  pokemonForm: PokemonForm;
  selectedTrainer: Trainer;
  trainers: Trainer[];
  isSimulationStarted: boolean;
};

type Options = {
  label: string;
  value: string;
};

/** Trainer Types */
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

/** Pokemon Types */
type Pokemon = {
  id: string;
  base_experience: number;
  height: number;
  name: string;
  nickname: string;
  weight: number;
  order: number;
  pokedexId: string;
  sprites: Sprites;
};

type Sprites = {
  front_default: string;
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

type PokemonForm = {
  pokemonId: string;
  pokedexId: string;
  name: string;
};
