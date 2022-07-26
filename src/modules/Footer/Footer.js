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

      <ul className="footer-wrapper--icon ">
        {socials.map(({ id, icon, path }) => (
          <li key={id}>
            <a href={path} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${icon}`} />
            </a>
          </li>
        ))}
      </ul>
      <div className="footer-contact">© All rights reserved, 2022</div>
    </footer>
  );
};
export default Footer;
