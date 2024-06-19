import Image from "next/image";
import UserStatsContainer from "./components/UserStatsContainer";
import { CalculatorIcon } from "@/ui/CalculatorIcon";
import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
    <main className="container w-full h-full min-h-screen flex-1 flex flex-col items-center justify-center z-10">
      <UserStatsContainer />
    </main>
  );
}
