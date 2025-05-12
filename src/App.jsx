import Container from "react-bootstrap/Container";
import Navbar from "./Components/Navbar/navbar";
import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <Container fluid className="App">
      <Navbar />
      <Home />
      <Footer />
    </Container>
  );
}
