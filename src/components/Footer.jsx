import "../blocks/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__name">Developed by Josh Ricks</p>
      <p className="footer__copyright">{new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
