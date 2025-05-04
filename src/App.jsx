import Container from "react-bootstrap/Container";
import Navbar from "./Components/Navbar/navbar";
import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <Container fluid className="App">
      <h1>Clinical System</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
