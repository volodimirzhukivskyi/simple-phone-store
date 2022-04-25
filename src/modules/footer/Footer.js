const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-title">- свяжитесь с нами -</h2>
      <p className="footer-text">
        Оставляйте ваши контакты и мы с вами свяжемся . Call center работает
        каждый день с 9:00-20:00. Ждем вас!!!{" "}
      </p>
      <div className="footer-wrapper--icon ">
        <a href="#">
          <div className="footer-wrapper--icon__wi-fi circle-icon">
            <img src="simple-phone-store/img/smallPicImg/wi-fi.png" alt="Wi-fi" />
          </div>
        </a>

        <a href="#">
          <div className="footer-wrapper--icon__facebook circle-icon">
            <img
              src="simple-phone-store/img/smallPicImg/facebook-icon.png"
              alt="facebook"
            />
          </div>
        </a>
        <a href="#">
          <div className="footer-wrapper--icon__dribbble circle-icon">
            <img
              src="simple-phone-store/img/smallPicImg/dribbble-icon.png"
              alt="dribbble"
            />
          </div>
        </a>

        <a href="#">
          <div className="footer-wrapper--icon__pinterest circle-icon">
            <img
              src="simple-phone-store/img/smallPicImg/pinterest-icon.png"
              alt="pinterest"
            />
          </div>
        </a>
      </div>
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
