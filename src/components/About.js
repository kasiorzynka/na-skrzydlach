import { Container } from "semantic-ui-react";
// import photo from "../Agnieszka_Twarowska.jpg";

const About = () => {
  return (
    <div>
      <Container text style={{ marginTop: "5em" }}>
        <h1>O mnie</h1>
        {/*<Grid divided inverted stackable>
          <Grid.Column width={4}>
            <img
              src={photo}
              alt="Agnieszka Twarowska"
              style={{ maxWidth: "150px" }}
            />
          </Grid.Column>
          <Grid.Column width={12}>
          Jestem psychologiem, 
          </Grid.Column>
        </Grid>
*/}
        <p></p>
        <div style={{ textAlign: "justify" }}>
          <p>
            <strong>
              W zawodzie psychologa pracuję od 2012r. Swoje doświadczenie
              zdobywałam min.:
            </strong>
          </p>
          <ul>
            <li>w Stowarzyszeniu Niebieska Linia</li>
            <li>
              w Ogólnopolskiej Poradni dla Osób w Kryzysie Emocjonalnym 116 123
              działającej przy Instytucie Psychologii Zdrowia
            </li>
            <li>w Centrum Poznawczo – Behawioralnym Ad Rem</li>
            <li>w Pracowni Pomocy Psychologicznej i Psychoterapii Solutio</li>
          </ul>
        </div>
        <div style={{ textAlign: "justify" }}>
          <p>
            <strong>Moje dodatkowe szkolenia to min.: </strong>
          </p>
          <ul>
            <li>
              szereg szkoleń z Terapii Schematu w ośrodkach posiadających
              certyfikat ISST min. ośrodku Cogito
            </li>
            <li>
              szkolenie pierwszego stopnia z zakresu Terapii Skoncentrowanej na
              Emocjach (EFT) w ośrodku Intra
            </li>
            <li>
              roczne szkolenie z zakresu pracy z grupą w szkole STABI przy
              Instytucie Zarządzania przez Wartości
            </li>
            <li>
              szkolenie z Terapii Skoncentrowanej na Rozwiązaniach (TSR) w
              Stowarzyszeniu Niebieska Linia
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default About;
