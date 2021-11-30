import "./App.css";
import { Container } from "react-bootstrap";
import Pokemon from "./components/Pokemon";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Pokemon />
      </Container>
    </>
  );
};

export default App;
