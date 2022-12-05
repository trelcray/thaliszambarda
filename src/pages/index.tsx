import { Header } from "../components/Header";
import { About } from "./about";

export default function Home() {
  return (
    <div className="dark:bg-[url('/bg.png')] bg-repeat min-h-screen">
      <Header />
      <About/>
      <About/>
    </div>
  );
}
