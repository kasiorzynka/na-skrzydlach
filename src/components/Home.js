import { Container, Header } from "semantic-ui-react";
// import photo from "../Agnieszka_Twarowska.jpg";

const Home = () => {
  return (
    <div>
      <Container text className="home">
        {/*
        <img
          src={photo}
          alt="Agnieszka Twarowska"
          style={{ maxWidth: "200px" }}
  />*/}
        <Header as="h1">Agnieszka Twarowska</Header>
        <Header>Gabinet psychoterapii</Header>
        <Header>&quot;NA SKRZYDŁACH&quot;</Header>
        <p style={{ textAlign: "justify" }}>
          Jestem psychologiem, certyfikowanym terapeutą poznawczo –
          behawioralnym (nr certyfikatu PTTPB 1454). Swoje szkolenie odbyłam w
          czteroletniej całościowej Szkole Psychoterapii Poznawczo-Behawioralnej
          Uniwersytetu SWPS pod kierownictwem dr hab. Agnieszki Popiel i dr Ewy
          Pragłowskiej. Obecnie podjęłam kolejne pięcioletnie całościowe
          szkolenie psychoterapeutyczne z&nbsp;zakresu terapii psychodynamiczno
          – systemowej w Fundacji Rozwoju Terapii Rodzin Na Szlaku
          przygotowujące do certyfikatu psychoterapeuty Polskiego Towarzystwa
          Psychiatrycznego.
        </p>{" "}
        <p style={{ textAlign: "justify" }}>
          Obecnie pracuję w Oddziale Dziennym Ogólnopsychiatrycznym
          Mazowieckiego Szpitala Bródnowskiego. W ramach swoich obowiązków
          prowadzę psychoterapię grupową oraz zajmuję się procesami
          diagnostycznymi. Współpracuję również z Warszawskim Uniwersytetem
          Medycznymo prowadząc zajęcia dydaktyczne dla studentów programu
          English Division. Przyjmuję w ramach prywatnej praktyki. Pracuję pod
          stałą superwizją.
        </p>
      </Container>
    </div>
  );
};

export default Home;
