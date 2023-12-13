import Warning from "./components/Warning/Warning";
import NavBar from "./components/NavBar/NavBar";
import MenuNavbar from "./components/NavBar/MenuNavbar";
import LunchMeny from "./components/Meny/Lunch/Lunch";
import SushiMeny from "./components/Meny/Sushi/Sushi";
import NorimakiMeny from "./components/Meny/Norimaki/Norimaki";
import SashimiMeny from "./components/Meny/Sashimi/Sashimi";
import PokeBowl from "./components/Meny/PokeBowl/PokeBowl";
import Varmratter from "./components/Meny/Varmratter/Varmratter";
import Special from "./components/Meny/Special/Special";
import BarnMeny from "./components/Meny/Barn/Barn";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";
import { Suspense } from "react";

const OPTIONS = {};
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
function App() {
  return (
    <div>
      <NavBar />
      <Warning />

      <div className="sandbox app__bg">
        <section>
          <Carousel slides={SLIDES} options={OPTIONS} />
        </section>
      </div>
      <Header />
      <main>
        <MenuNavbar />
        <LunchMeny />
        <Suspense>
          <SushiMeny />
          <NorimakiMeny />
          <SashimiMeny />
          <PokeBowl />
          <Varmratter />
          <Special />
          <BarnMeny />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
