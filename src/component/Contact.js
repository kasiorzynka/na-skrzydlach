import { Container, Header } from "semantic-ui-react";

const Contact = () => {
  return (
    <div>
      <Container text style={{ marginTop: "5em" }}>
        <Header as="h1">Kontakt:</Header>
        <Header>Gabinet Psychoterapii Na Skrzydłach</Header>
        <p>
          <i className="phone icon"></i>
          <a href="tel:+48 784 372 702">+48 784 372 702</a>
        </p>
        <p>
          <i className="mail icon"></i>
          <a href="mailto:twarowskapsycholog@gmail.com">
            twarowskapsycholog@gmail.com
          </a>
        </p>
      </Container>
    </div>
  );
};

export default Contact;
