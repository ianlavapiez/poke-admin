type Options = {
  label: string;
  value: string;
};

type Trainer = {
  id: number;
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
type TrainerRegistration = Pick<Trainer, "name" | "rank">;
type TrainerTable = Pick<Trainer, "id" | "name" | "rank">;
