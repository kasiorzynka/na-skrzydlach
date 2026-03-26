import { Container, Header } from "semantic-ui-react";

const Contact = () => {
  return (
    <div>
      <Container text className="contact">
        <Header as="h1">Kontakt:</Header>
        <Header>Gabinet Psychoterapii &quot;Na skrzydłach&quot;</Header>
        <p>Uprzejmie proszę o kontakt SMS-owy lub mailowy:</p>
        <p>
          <i className="phone icon"></i>
          <a href="tel:+48 784 372 702">+48 784 372 702</a>
        </p>
        <p>
          <i className="mail icon"></i>
          <a href="mailto:twarowskapsycholog@gmail.com">
            twarowskapsycholog@gmail.com
          </a>
        </p>
        <p><i className="home icon"></i>Ul. Wileńska 14/73 03-414 Warszawa
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d610.5491910561814!2d21.04073513655117!3d52.25797188067035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc396f0a5d69%3A0x57e252360ab3b13d!2sWile%C5%84ska%2014!5e0!3m2!1spl!2spl!4v1731357417734!5m2!1spl!2spl" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <div className="transfer">
            <h3>Dane do przelewu:</h3>
            <strong>Bank Pekao S.A.<br></br>
            Numer konta: 20 1240 1079 1111 0010 1368 4870</strong>
            <p className="transfer-title">W tytule uprzejmie proszę wpisać <strong>&quot;SESJA&quot;</strong> oraz datę opłacanego spotkania. W przypadku, gdy opłacana jest sesja innej osoby, również imię i nazwisko za kogo jest dokonywana płatność.</p>
          </div>
      </Container>
    </div>
  );
};

export default Contact;
