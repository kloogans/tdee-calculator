import UserStatsContainer from "./components/UserStatsContainer";

export default function Home() {
  return (
    <main className="container w-full h-full min-h-screen flex-1 flex flex-col items-center justify-center z-10">
      <UserStatsContainer />
    </main>
  );
}
