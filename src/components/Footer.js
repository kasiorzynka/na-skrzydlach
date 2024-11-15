import { Container, Segment } from "semantic-ui-react";
//import LogoFull from "../icons/LogoFull";  //<LogoFull color="#ffffff" />
//import {ReactComponent as LogoWhite} from "../icons/LogoWhite.svg";    <LogoWhite />
import LogoWhite from "../icons/LogoWhite.png";

const Footer = () => (
  <>
  <Segment className="app-footer" inverted>
    <img src={LogoWhite} alt="Logo Gabinet psychoterapii Na skrzydłach" width="50px" />
    <Container textAlign="center">
      <a href="https://www.linkedin.com/in/katarzyna-ficz/" target="_blank" rel="noreferrer">&copy; {new Date().getFullYear()} Ficzer Company</a>
      <p>All rights reserved</p>
    </Container>
  </Segment>
  </>
);

export default Footer;
