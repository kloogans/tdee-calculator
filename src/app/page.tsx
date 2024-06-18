import Image from "next/image";
import UserStatsContainer from "./components/UserStatsContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="min-h-screen container w-full flex items-center justify-center">
        <UserStatsContainer />
      </div>
    </main>
  );
}
