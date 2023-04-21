import "./App.css";
import { DressCode } from "./components/dressCode";
import { Footer } from "./components/footer";
import { Gifts } from "./components/gifts";
import { Gratitude } from "./components/gratitude";
import { Home } from "./components/home";
import { Location } from "./components/location";
import { ListWedding } from "./components/musicList";
import { NavBar } from "./components/navbar";
import { Reserve } from "./components/reserve";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Reserve />
      <Location />
      {/* <Hotel /> */}
      <DressCode />
      <Gifts />
      <Gratitude />
      <ListWedding />
      <Footer />
    </div>
  );
}

export default App;
