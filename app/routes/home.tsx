import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New Meow Meow App" },
    { name: "description", content: "Welcome to Smart Club!" },
  ];
}

