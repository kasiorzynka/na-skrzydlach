import { Container } from "semantic-ui-react";
import PhotoProfile from "../photos/Agnieszka-Twarowska-profile.jpg";

const About = () => {
  return (
    <div>
      <Container className="about" text>
        <h1>O mnie</h1>    
        <div>
          <p className="title">
            <strong>
              Swoje doświadczenie zdobywałam min.:
            </strong>
          </p>        
        <img
          src={PhotoProfile}
          alt="Agnieszka Twarowska profile photo"
          className="photo-profile"
        />
          <ul>
            <li>w Mazowieckim Szpitalu Bródnowskim na Oddziale Całodobowym oraz Oddziale Dziennym</li>
            <li>w Centrum Poznawczo – Behawioralnym &quot;Ad Rem&quot;</li>
            <li>w Pracowni Pomocy Psychologicznej i&nbsp;Psychoterapii &quot;Solutio&quot;</li>
            <li>w Ogólnopolskiej Poradni &quot;Kryzysowy Telefon Zaufania 116 123&quot; działającej przy Instytucie Psychologii Zdrowia</li>
            <li>w Stowarzyszeniu na Rzecz Przeciwdziałania Przemocy w Rodzinie &quot;Niebieska Linia&quot;</li>
          </ul>
        </div>
        <div>
          <p className="title">
            <strong>Dodatkowo poszerzam swoje kompetencje poprzez uczestnictwo w szkoleniach:</strong>
          </p>
          <ul>
            <li>
            szereg szkoleń z Terapii Schematu w ośrodkach posiadających certyfikat ISST min. ośrodku &quot;Cogito&quot;
            </li>
            <li>
            szkolenie pierwszego i drugiego stopnia z zakresu Terapii Skoncentrowanej na Emocjach (EFT) w ośrodku &quot;Intra&quot;
            </li>
            <li>
            roczne szkolenie z zakresu pracy z grupą w szkole &quot;STABI&quot; przy Instytucie Zarządzania przez Wartości
            </li>
            <li>
            szkolenie z Terapii Skoncentrowanej na Rozwiązaniach (TSR) w Stowarzyszeniu &quot;Niebieska Linia&quot;
            </li>
            <li>
            szkolenie z zakresu psychodramy w szkole terapii &quot;Dialog&quot;
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default About;
