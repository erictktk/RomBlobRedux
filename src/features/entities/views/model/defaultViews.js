import { View, totalViewLambda } from "./views";

const heatManDesc = "A view for Heat-Man";
const heatManURL =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f2af7648-2754-42e7-b98f-0fd9fa6ab5fd/d6lu95c-749c3c30-c57b-427a-b927-d3f4042a2d2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YyYWY3NjQ4LTI3NTQtNDJlNy1iOThmLTBmZDlmYTZhYjVmZFwvZDZsdTk1Yy03NDljM2MzMC1jNTdiLTQyN2EtYjkyNy1kM2Y0MDQyYTJkMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rEe9uoOfw62Yx13CKOKGAKm2Ak-zpjTsDdpmScjgSls";

export const HeatManView = totalViewLambda(
  0,
  "Heat Man",
  [],
  [],
  ["Heat-Man"],
  heatManDesc,
  null,
  heatManURL
);
export const BossesView = totalViewLambda(1, "Bosses", [], [0], ["Boss"]);
export const EnemiesView = totalViewLambda(
  2,
  "Enemies Data",
  [],
  [],
  ["Enemy"]
);
export const PlayerView = totalViewLambda(3, "Player Data", [], [], ["Player"]);

export const defaultViews = [HeatManView, BossesView, PlayerView];
