import NavBar from "./components/NavBar/NavBar"
import LunchMeny from "./components/LunchMeny/LunchMeny"
import SushiMeny from "./components/Meny/Sushi/Sushi"
import NorimakiMeny from "./components/Meny/Norimaki/Norimaki"
import './App.css'

function App() {

  return (
      <div>
      <NavBar />
      <LunchMeny />
      <SushiMeny />
      <NorimakiMeny />
      </div>
  )
}

export default App
