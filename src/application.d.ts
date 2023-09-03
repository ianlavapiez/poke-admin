type Trainer = {
  id: number;
  name: string;
  rank: number;
};

type TrainerRegistration = Pick<Trainer, "name" | "rank">;

type TrainerTable = Pick<Trainer, "id" | "name" | "rank">;
