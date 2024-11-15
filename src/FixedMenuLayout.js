import { Link, Routes, Route } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import Home from "./components/Home";
import About from "./components/About";
import Psychotherapy from "./components/Psychotherapy";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Logo from "./icons/Logo"; <Logo color="#ffffff" />
// import LogoFull from "./icons/LogoFull";
import LogoWhite from "./icons/LogoWhite.png";

//#6bd5b4

const FixedMenuLayout = () => (
  <div className="content-wrap">
    <div className="app-header">
      <Menu fixed="top" inverted>
        <Container>
          <Link to="/">
            <Menu.Item as="a" header>
            <img src={LogoWhite} className="logo-menu" alt="Logo Gabinet psychoterapii Na skrzydłach" width="50px" />
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
    </div>
    <div className="app-content">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/psychotherapy" element={<Psychotherapy />}></Route>
        <Route path="/prices" element={<Prices />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
    <Footer />
  </div>
);

export default FixedMenuLayout;
