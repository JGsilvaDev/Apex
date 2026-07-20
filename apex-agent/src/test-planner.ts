import { understand } from "./nlu";
import { createPlan } from "./brain/planner";

const nlu = understand(
  "Apex, crie uma pasta chamada Fotos nos documentos"
);

const plan = createPlan(nlu);

console.log(plan);