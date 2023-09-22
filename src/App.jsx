import NavBar from "./components/NavBar/NavBar"
import LunchMeny from "./components/Meny/Lunch/Lunch"
import SushiMeny from "./components/Meny/Sushi/Sushi"
import NorimakiMeny from "./components/Meny/Norimaki/Norimaki"
import Varmratter from "./components/Meny/Varmratter/Varmratter"
import './App.css'

function App() {

  return (
      <div>
      <NavBar />
      <LunchMeny />
      <SushiMeny />
      <NorimakiMeny />
      <Varmratter />
      </div>
  )
}

export default App
