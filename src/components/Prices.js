import { Container } from "semantic-ui-react";

const Prices = () => {
  return (
    <div>
      <Container text className="prices">
        <h1>Cennik</h1>
        <div>
          <p>
            <strong>Konsultacja</strong> (50 min):
          </p>
          200zł
        </div>
        <p></p>
        <div>
          <p>
            <strong>Sesja psychoterapii indywidualnej</strong> (50 min):
          </p>
          200zł
        </div>
      </Container>
    </div>
  );
};

export default Prices;
