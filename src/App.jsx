import Container from "react-bootstrap/Container";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";

export default function App() {
  return (
    <Container fluid className="App">
      <Navbar />
      <Home />
      <Footer />
    </Container>
  );
}
