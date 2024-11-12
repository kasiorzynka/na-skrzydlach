import { Container } from "semantic-ui-react";
// import photo from "../Agnieszka_Twarowska.jpg";

const About = () => {
  return (
    <div>
      <Container className="about" text>
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
        
        <div>
          <p>
            <strong>
              Swoje doświadczenie zdobywałam min.:
            </strong>
          </p>
          <ul>
            <li>w Mazowieckim Szpitalu Bródnowskim na Oddziale Całodobowym oraz Oddziale Dziennym</li>
            <li>w Centrum Poznawczo – Behawioralnym &quot;Ad Rem&quot;</li>
            <li>w Pracowni Pomocy Psychologicznej i Psychoterapii &quot;Solutio&quot;</li>
            <li>w Ogólnopolskiej Poradni &quot;Kryzysowy Telefon Zaufania 116 123&quot; działającej przy Instytucie Psychologii Zdrowia</li>
            <li>w Stowarzyszeniu na Rzecz Przeciwdziałania Przemocy w Rodzinie &quot;Niebieska Linia&quot;</li>
          </ul>
        </div>
        <div>
          <p>
            <strong>Dodatkowo poszerzam swoje kompetencje poprzez uczestnictwo w szkoleniach:</strong>
          </p>
          <ul>
            <li>
            szereg szkoleń z Terapii Schematu w ośrodkach posiadających certyfikat ISST min. ośrodku Cogito
            </li>
            <li>
            szkolenie pierwszego i drugiego stopnia z zakresu Terapii Skoncentrowanej na Emocjach (EFT) w ośrodku Intra
            </li>
            <li>
            roczne szkolenie z zakresu pracy z grupą w szkole STABI przy Instytucie Zarządzania przez Wartości
            </li>
            <li>
            szkolenie z Terapii Skoncentrowanej na Rozwiązaniach (TSR) w Stowarzyszeniu Niebieska Linia
            </li>
            <li>
            szkolenie z zakresu psychodramy w szkole terapii Dialog
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default About;
