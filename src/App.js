import "./App.css";
import { NavBar } from "./components/navbar";
import { Home } from "./components/home";
import { Reserve } from "./components/reserve";
import { Location } from "./components/location";
import Maps from "./components/maps";
import { Gifts } from "./components/gifts";
import { ListWedding } from "./components/musicList";
import { Gratitude } from "./components/gratitude";
import { Footer } from "./components/footer";
import { Hotel } from "./components/hotel";
import { DressCode } from "./components/dressCode";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Reserve />
      <Location />
      <Maps />
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
