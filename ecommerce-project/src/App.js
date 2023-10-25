import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Merch from "./components/Merch";
import Music from "./components/Music";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Header />
      <Music />
      <Merch />
      <Footer />
    </CartProvider>
  );
}

export default App;
