import { Link, Routes, Route } from "react-router-dom";
import {
  Container,
  Divider,
  // Dropdown,
  Grid,
  Header,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";
import Home from "./component/Home";
import About from "./component/About";
import Psychotherapy from "./component/Psychotherapy";
import Prices from "./component/Prices";
import Contact from "./component/Contact";
import photo from "./Agnieszka_Twarowska.jpg";

const FixedMenuLayout = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Link to="/">
          <Menu.Item as="a" header>
            <i className="home icon"></i>
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

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/psychotherapy" element={<Psychotherapy />}></Route>
          <Route path="/prices" element={<Prices />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>

        {/* <Dropdown item simple text="Dropdown">
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </Container>
    </Menu>

    <Container text style={{ marginTop: "7em" }}>
      <img
        src={photo}
        alt="Agnieszka Twarowska"
        style={{ maxWidth: "200px" }}
      />
      <Header as="h1">Agnieszka Twarowska</Header>
      <Header>Gabinet psychoterapii &quot;Na Skrzydłach&quot;</Header>
      <p>+48 784 372 702</p>
    </Container>

    <Segment
      inverted
      vertical
      style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
    >
      <Container textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Group 1" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Group 2" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Group 3" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as="h4" content="Polecane strony:" />
            <p>
              Extra space for a call to action inside the footer that could help
              re-engage users.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        {/* <Image centered size="mini" src="/logo.png" /> */}
        <List horizontal inverted divided link size="small">
          <List.Item as="a" href="#">
            Kontakt
          </List.Item>
          <List.Item as="a" href="#">
            Mapa strony
          </List.Item>
          <List.Item as="a" href="#">
            Regulamin/Terms and Conditions
          </List.Item>
          <List.Item as="a" href="#">
            Polityka prywatności
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
);

export default FixedMenuLayout;
