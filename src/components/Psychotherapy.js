import { Container, Header } from "semantic-ui-react";

const Psychotherapy = () => {
  return (
    <div>
      <Container text style={{ marginTop: "5em" }}>
        <Header as="h1">Psychoterapia</Header>
        <p>
          <strong>Oferuję psychoterapię z zakresu:</strong>
        </p>
        <ul style={{ textAlign: "left" }}>
          <li>depresji</li>
          <li>zaburzeń lękowych min. fobii społecznej, lęku uogólnionego</li>
          <li>problemów związanych z niską samooceną</li>
          <li>trudności związanych z dysregulacją emocjonalną</li>
          <li>braku satysfakcjonujących związków, samotnością</li>
          <li>poczuciem braku sensu życia</li>
          <li>
            PTSD oraz trudnościami związanymi z traumatycznymi przeżyciami
          </li>
          <li>zaburzeń obsesyjno – kompulsyjnych</li>
          <li>ADHD</li>
        </ul>
      </Container>
    </div>
  );
};

export default Psychotherapy;
