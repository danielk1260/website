import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import Waves from "./resources/waves/Waves";
import HeaderSite from "./components/header/HeaderSite";
document.body.classList.add("fondo");

function App() {
  return (
    <div className="cv">
      <Container>
        <HeaderSite />
      </Container>
      <Waves />
    </div>
  );
}

export default App;
