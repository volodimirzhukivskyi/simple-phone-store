const Footer = () => {
  const socials = [
    { id: 1, path: "https://youtube.com/", icon: "youtube" },
    { id: 2, icon: "linkedin", path: "https://linkedin.com/in/" },
    { id: 3, icon: "twitter", path: "https://twitter.com/" },
    { id: 4, icon: "instagram", path: "https://instagram.com/" },
  ];
  return (
    <footer className="footer">
      <h2 className="footer-title">- свяжитесь с нами -</h2>
      <p className="footer-text">
        Оставляйте ваши контакты и мы с вами свяжемся . Call center работает
        каждый день с 9:00-20:00. Ждем вас!!!{" "}
      </p>
      <ul className="footer-wrapper--icon ">
        {socials.map(({ id, icon, path }) => (
          <li key={id}>
            <a href={path} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${icon}`} />
            </a>
          </li>
        ))}
      </ul>
      <div className="footer-contact">
        <p className="footer-concat__address ">
          {" "}
          Индустриальная ул. 14-05 город Киев /{" "}
        </p>
        <a href="tel: +38 (073) 102 70 43 " className="footer-contact__phone">
          T. +38 (073) 102 70 43 /
        </a>
        <a href="mailto: mobi.life@email.com" className="footer-contact__email">
          mobi.life@email.com
        </a>
      </div>
    </footer>
  );
};
export default Footer;
