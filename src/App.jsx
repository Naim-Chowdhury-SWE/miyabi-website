import NavBar from "./components/NavBar/NavBar"
import LunchMeny from "./components/Meny/Lunch/Lunch"
import SushiMeny from "./components/Meny/Sushi/Sushi"
import NorimakiMeny from "./components/Meny/Norimaki/Norimaki"
import Varmratter from "./components/Meny/Varmratter/Varmratter"
import './App.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {

  return (
      <div>
      <NavBar />
      <Header />
      <LunchMeny />
      <SushiMeny />
      <NorimakiMeny />
      <Varmratter />
      <Footer />
      </div>
  )
}

export default App
