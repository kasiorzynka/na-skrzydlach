import { Link, Routes, Route } from "react-router-dom";
import { Container, Menu, Segment } from "semantic-ui-react";
import Home from "./components/Home";
import About from "./components/About";
import Psychotherapy from "./components/Psychotherapy";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import Logo from "./icons/Logo";
import LogoFull from "./icons/LogoFull";
//#6bd5b4

const FixedMenuLayout = () => (
  <div className="content-wrap">
    <Menu fixed="top" inverted>
      <Container>
        <Link to="/">
          <Menu.Item as="a" header>
            <Logo color="#ffffff" />
            Na skrzydłach
          </Menu.Item>
        </Link>
        <Link to="/about">
          <Menu.Item as="a">O mnie</Menu.Item>
        </Link>
        <Link to="/psychotherapy">
          <Menu.Item as="a">Psychoterapia</Menu.Item>
        </Link>
        <Link to="/prices">
          <Menu.Item as="a">Cennik</Menu.Item>
        </Link>
        <Link to="/contact">
          <Menu.Item as="a">Kontakt</Menu.Item>
        </Link>
      </Container>
    </Menu>

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/psychotherapy" element={<Psychotherapy />}></Route>
      <Route path="/prices" element={<Prices />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>

    <Segment className="footer" inverted>
      <LogoFull color="#ffffff" />
      <Container textAlign="center">
        Copyright:&nbsp;
        <a href="https://www.linkedin.com/in/katarzyna-ficz/">Ficz Company</a>
        <p>All rights reserved.</p>
      </Container>
    </Segment>
  </div>
);

export default FixedMenuLayout;
