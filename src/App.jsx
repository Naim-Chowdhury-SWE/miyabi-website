import NavBar from "./components/NavBar/NavBar"
import LunchMeny from "./components/Meny/Lunch/Lunch"
import SushiMeny from "./components/Meny/Sushi/Sushi"
import NorimakiMeny from "./components/Meny/Norimaki/Norimaki"
import Varmratter from "./components/Meny/Varmratter/Varmratter"
import BarnMeny from "./components/Meny/Barn/Barn"
import './App.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer" 
import Carousel from "./components/Carousel/Carousel"

const OPTIONS = {}
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
function App() {



  return (
      <div>
      <NavBar />

      <div className="sandbox app__bg">
        <section className="sandbox__carousel">
          <Carousel slides={SLIDES} options={OPTIONS} />
        </section>
      </div>
      <Header />
      <LunchMeny />
      <SushiMeny />
      <NorimakiMeny />
      <Varmratter />
      <BarnMeny />
      <Footer />
      </div>
  )
}

export default App
