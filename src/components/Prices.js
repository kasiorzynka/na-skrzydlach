import { Container } from "semantic-ui-react";

const Prices = () => {
  return (
    <div>
      <Container text className="prices">
        <h1>Cennik</h1>
        <ul>
          <li><strong>Konsultacja psychologiczna </strong> (50 min): 220zł</li>
        </ul>
        <ul>
          <li><strong>Interwencja kryzysowa </strong> (50 min): 220zł</li>
        </ul>
        <ul>
          <li><strong>Sesja psychoterapii indywidualnej </strong> (50 min): 220zł</li>
        </ul>
        <ul>
          <li><strong>Sesja psychoterapii indywidualnej online </strong> (50 min): 220zł</li>
        </ul>
        <ul>
          <li><strong>Sesja diagnostyczna </strong> (50 min): 220zł</li>
        </ul>
      </Container>
    </div>
  );
};

export default Prices;
