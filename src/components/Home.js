import { Container, Header } from "semantic-ui-react";
import PhotoFull from "../photos/Agnieszka-Twarowska-full.jpg";

const Home = () => {
  return (
    <div>
      <Container text className="home">

        <Header as="h1">Agnieszka Twarowska</Header>
        <Header>Gabinet psychoterapii &quot;Na skrzydłach&quot;</Header>
        <img
          src={PhotoFull}
          alt="Agnieszka Twarowska"
          className="photo-full"
        />
        <p>Jestem magistrem psychologii oraz certyfikowanym terapeutą poznawczo – behawioralnym (nr&nbsp;certyfikatu 1454).</p>
        <p>
          W zawodzie pracuję od 2012r. Początkowo zajmowałam się interwencją kryzysową i poradnictwem psychologicznym. Obecnie w ramach prywatnej praktyki prowadzę indywidualne procesy psychoterapeutyczne. Pracuję też w Oddziale Dziennym Ogólnopsychiatrycznym Mazowieckiego Szpitala Bródnowskiego, gdzie prowadzę psychoterapię grupową, konsultacje indywidualne oraz spotkania z rodzinami pacjentów. W ramach swoich obowiązków wdrażam i nadzoruję pracę psychologów realizujących szpitalny staż. Współpracuję z Warszawskim Uniwersytetem Medycznym prowadząc zajęcia dla studentów uniwersyteckiej sekcji zagranicznej z tematyki diagnozy psychologicznej.
        </p>
        <p>
          Szkolenie odbyłam w czteroletniej całościowej Szkole Psychoterapii Poznawczo-Behawioralnej Uniwersytetu SWPS pod kierownictwem dr hab. Agnieszki Popiel i dr Ewy Pragłowskiej. W ramach rozwoju zawodowego realizuję kolejne pięcioletnie szkolenie psychoterapeutyczne z zakresu terapii psychodynamicznej i systemowej w Fundacji Rozwoju Terapii Rodzin Na Szlaku pod kierownictwem prof. dr hab. med. Bogdana de Barbaro. Dodatkowo regularnie uczestniczę w szkoleniach poszerzających kompetencje psychoterapeuty, w tym w kursach z zakresu Terapii Schematów oraz Terapii Skoncentrowanej na Emocjach (EFT). Jestem członkiem Polskiego Towarzystwa Terapii Poznawczej i Behawioralnej. Pracuję pod stałą superwizją.
        </p>
      </Container>
    </div>
  );
};

export default Home;
