import { Container, Segment } from "semantic-ui-react";
import LogoFull from "../icons/LogoFull";

const Footer = () => (
  <>
  <Segment className="app-footer" inverted>
    <LogoFull color="#ffffff" />
    <Container textAlign="center">
      <a href="https://www.linkedin.com/in/katarzyna-ficz/" target="_blank" rel="noreferrer">&copy; {new Date().getFullYear()} Ficzer Company</a>
      <p>All rights reserved</p>
    </Container>
  </Segment>
  </>
);

export default Footer;
