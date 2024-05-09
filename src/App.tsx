import Bonds from "./components/Bonds"
import Counter from "./components/Counter"
import Header from "./components/Header"
import "./index.css"
import Map from "./components/Map"
function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Bonds />
        <Counter />
        <Map />
      </div>
    </div>
  )

}

export default App

