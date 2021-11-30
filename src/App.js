import "./App.css";
import { Container } from "react-bootstrap";
import Pokemon from "./components/Pokemon";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Pokemon />
      </Container>
      <Footer />
    </>
  );
};

export default App;
