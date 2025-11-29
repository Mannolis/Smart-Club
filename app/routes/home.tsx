import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New Meow Meow App" },
    { name: "description", content: "Welcome to Smart Club!" },
  ];
}
 
export default function Home() {
  return <h1>n</h1>;
}