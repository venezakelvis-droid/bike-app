import "./Footer.css";
import type { IPropsFooter } from "./FooterProps";

function Footer({
  operatingHours,
  contacts,
  about,
  copyright,
}: IPropsFooter) {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h4>Horário de funcionamento</h4>
          {operatingHours.map((item, index) => (
            <p key={index}>
              <strong>{item.label}:</strong> {item.time}
            </p>
          ))}
        </div>


        <div className="footer-section">
          <h4>Contato</h4>
          {contacts.map((contact, index) => (
            <p key={index}>
              <strong>{contact.label}:</strong> {contact.value}
            </p>
          ))}
        </div>


        {about && (
          <div className="footer-section">
            <h4>Sobre</h4>
            <p>{about}</p>
          </div>
        )}
      </div>

      <div className="footer-bottom">
        <span>
          {copyright ??
            `© ${new Date().getFullYear()} Minha App. Todos os direitos reservados.`}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
