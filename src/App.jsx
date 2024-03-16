import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Geniuses from "./components/Geniuses";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Painters from "./components/Painters";
import Plays from "./components/Plays";

export default function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <Painters />
      <Plays />
      <Geniuses />
      <Gallery />
      <Footer />
    </div>
  );
}
