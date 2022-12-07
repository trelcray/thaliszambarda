import { Header } from "../components/Header";
import { About } from "./about";
import { Home } from "./home";

export default function Index() {
  return (
    <div className="dark:bg-[url('/bg.png')] bg-[#F3F9FF] bg-repeat min-h-screen">
      <Header />
      <section id="home">
        <Home/>
      </section>
      <section id="about">
        <About/>
      </section>
      
      
    </div>
  );
}
