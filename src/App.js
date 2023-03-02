import "./App.css";
import { Home } from "./components/home";
import { Location } from "./components/location";
import { NavBar } from "./components/navbar";
import { Reserve } from "./components/reserve";
// import Maps from "./components/maps";
import { DressCode } from "./components/dressCode";
import { Footer } from "./components/footer";
import { Gifts } from "./components/gifts";
import { Gratitude } from "./components/gratitude";
import { Hotel } from "./components/hotel/index";
import { ListWedding } from "./components/musicList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Reserve />
      <Location />
      {/* <Maps /> */}
      <Hotel />
      <DressCode />
      <Gifts />
      <Gratitude />
      <ListWedding />
      <Footer />
    </div>
  );
}

export default App;
