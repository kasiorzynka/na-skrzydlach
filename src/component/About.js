import { Container, Grid } from "semantic-ui-react";
import photo from "../Agnieszka_Twarowska.jpg";

const About = () => {
  return (
    <div>
      <Container text style={{ marginTop: "5em" }}>
        <Grid divided inverted stackable>
          <Grid.Column width={4}>
            <img
              src={photo}
              alt="Agnieszka Twarowska"
              style={{ maxWidth: "150px" }}
            />
          </Grid.Column>
          <Grid.Column width={12}>
            <p style={{ textAlign: "justify" }}>
              Jestem psychologiem, certyfikowanym terapeutą poznawczo –
              behawioralnym (nr certyfikatu PTTPB 1454). Swoje szkolenie odbyłam
              w czteroletniej całościowej Szkole Psychoterapii
              Poznawczo-Behawioralnej Uniwersytetu SWPS pod kierownictwem dr
              hab. Agnieszki Popiel i dr Ewy Pragłowskiej. Obecnie podjęłam
              kolejne pięcioletnie całościowe szkolenie psychoterapeutyczne
              z&nbsp;zakresu terapii psychodynamiczno – systemowej w Fundacji
              Rozwoju Terapii Rodzin Na Szlaku przygotowujące do certyfikatu
              psychoterapeuty Polskiego Towarzystwa Psychiatrycznego.
            </p>
          </Grid.Column>
        </Grid>

        <p></p>
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

          <p style={{ textAlign: "justify" }}>
            Obecnie pracuję w Oddziale Dziennym Ogólnopsychiatrycznym
            Mazowieckiego Szpitala Bródnowskiego. W ramach swoich obowiązków
            prowadzę psychoterapię grupową oraz zajmuję się procesami
            diagnostycznymi. Współpracuję również z Warszawskim Uniwersytetem
            Medycznymo prowadząc zajęcia dydaktyczne dla studentów programu
            English Division. Przyjmuję w ramach prywatnej praktyki. Pracuję pod
            stałą superwizją.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default About;
