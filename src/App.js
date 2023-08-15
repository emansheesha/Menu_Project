import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "./App.css";
import NavbarComp from "./components/Navbar/NavbarComp";
import HeaderComp from "./components/HeaderComp/HeaderComp";
function App() {

  return (
    <div className="App">
      <NavbarComp />
      <Container className="p-3">

        <Row>
          <Col sm={12} >
            <HeaderComp/>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
