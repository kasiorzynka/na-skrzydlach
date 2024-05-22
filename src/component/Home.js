import { Container, Header } from "semantic-ui-react";
import photo from "../Agnieszka_Twarowska.jpg";

const Home = () => {
  return (
    <div>
      <Container text style={{ marginTop: "7em" }}>
        <img
          src={photo}
          alt="Agnieszka Twarowska"
          style={{ maxWidth: "200px" }}
        />
        <Header as="h1">Agnieszka Twarowska</Header>
        <Header>Gabinet psychoterapii</Header>
        <Header>&quot;NA SKRZYDŁACH&quot;</Header>
        <i className="phone icon"></i>
        <a href="tel:+48 784 372 702">+48 784 372 702</a>
      </Container>
    </div>
  );
};

export default Home;
