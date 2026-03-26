import { Container, Header } from "semantic-ui-react";
import PhotoFull from "../photos/Agnieszka-Twarowska-full.jpg";
import Psychotherapy from "./Psychotherapy";

const Home = () => {
  return (
    <div>
      <Container text className="home">
        <Header as="h1">Agnieszka Twarowska</Header>
        <Header>Gabinet psychoterapii &quot;Na skrzydłach&quot;</Header>
        <img
          src={PhotoFull}
          alt="Agnieszka Twarowska full photo"
          className="photo-full"
        />
        <p>Jestem magistrem psychologii oraz certyfikowanym terapeutą poznawczo – behawioralnym (nr&nbsp;certyfikatu 1454).</p>
        <p>
          W zawodzie pracuję od 2012r. Początkowo zajmowałam się interwencją kryzysową i poradnictwem psychologicznym. Obecnie w ramach prywatnej praktyki prowadzę indywidualne procesy psychoterapeutyczne. Doświadczenie zawodowe zdobywałam w Oddziale Dziennym Ogólnopsychiatrycznym Mazowieckiego Szpitala Bródnowskiego Sp. z o.o., gdzie prowadziłam psychoterapię grupową, konsultacje indywidualne oraz spotkania z rodzinami pacjentów. W ramach swoich obowiązków wdrażałam i nadzorowałam pracę psychologów realizujących szpitalny staż. Obecnie współpracuję z Mazowieckim Szpitalem Wojewódzkim &quot;DREWNICA&quot; Sp. z o. o. oraz z Warszawskim Uniwersytetem Medycznym prowadząc zajęcia dla studentów.
        </p>
        <p>
          Szkolenie odbyłam w czteroletniej całościowej Szkole Psychoterapii Poznawczo-Behawioralnej Uniwersytetu SWPS pod kierownictwem dr hab. Agnieszki Popiel i dr Ewy Pragłowskiej. W ramach rozwoju zawodowego realizuję kolejne pięcioletnie szkolenie psychoterapeutyczne z zakresu terapii psychodynamicznej i systemowej w Fundacji Rozwoju Terapii Rodzin Na Szlaku pod kierownictwem prof. dr hab. med. Bogdana de Barbaro. Dodatkowo regularnie uczestniczę w szkoleniach poszerzających kompetencje psychoterapeuty, w tym w kursach z zakresu Terapii Schematów oraz Terapii Skoncentrowanej na Emocjach (EFT). Jestem członkiem Polskiego Towarzystwa Terapii Poznawczej i Behawioralnej. Pracuję pod stałą superwizją.
        </p>
        <Psychotherapy />
      </Container>
    </div>
  );
};

export default Home;
