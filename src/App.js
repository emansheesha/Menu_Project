import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./App.css";
import NavbarComp from "./components/Navbar/NavbarComp";
import HeaderComp from "./components/HeaderComp/HeaderComp";
import CardsComp from "./components/CardsComp/CardsComp";
import { data } from './components/data';
function App() {
  const [dataItems, setState] = useState([]);
  const handleCategory = (item) => {
    if (item == 'الكل') setState(data)
    else {

      const categoryItems = data.filter(element => element.category == item);
      // console.log(categoryItems, item)
      setState(categoryItems)
    }

  }
  const handleTitle = (item) => {
    if (item != '') {
      // console.log(item)
      const titleItems = data.filter(element => element.title == item);

      setState(titleItems)
    }

  }
  useEffect(() => {
    setState(data)
  }, [])

  return (
    <div className="App">
      <NavbarComp handleTitle={handleTitle} />
      <Container className="p-3">

        <Row>
          <Col sm={12} >
            <HeaderComp data={data} handleCategory={handleCategory} />
          </Col>
        </Row>
        <Row>
          <Col sm={12} >
            <CardsComp data={dataItems} />
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
