import { Container, Header } from "semantic-ui-react";

const Psychotherapy = () => {
  return (
    <div>
      <Container className="psychotherapy" text>
        <Header as="h1">Psychoterapia</Header>
        <p>
          <strong>Oferuję psychoterapię z zakresu:</strong>
        </p>
        <ul>
          <li>depresji i zaburzeń nastroju</li>
          <li>zaburzeń lękowych (ataki paniki, fobia społeczna, lęk uogólniony)</li>
          <li>zaburzeń osobowości (w tym osobowości borderline)</li>
          <li>zaburzeń odżywiania</li>
          <li>zespołu nadpobudliwości psychoruchowej (ADHD)</li>
          <li>zaburzenia obsesyjno-kompulsyjnego (OCD)</li>
          <li>
          zespołu stresu pourazowego (PTSD) oraz innych objawów przebytej traumy
          </li>
          <li>braku satysfakcjonujących związków, samotnością, trudnościami w budowaniu relacji interpersonalnych</li>
          <li>problemów związanych z niską samooceną</li>
          <li>wypalenia zawodowego</li>
          <li>wsparcia w wystąpieniu kryzysów życiowych, rodzinnych, zawodowych</li>
          <li>lepszego poznania i zrozumienia siebie</li>
        </ul>
      </Container>
    </div>
  );
};

export default Psychotherapy;
