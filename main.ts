// The Worst Pizza Topping — one funny line pitching a terrible pizza topping.
// Deterministic: no network, no randomness, no timestamps. Writes /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Try our new pizza topped with wet gym socks marinated in pickle juice — one bite and your taste buds file for divorce.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars`);
