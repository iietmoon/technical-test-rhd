
const Footer = () => {
  const Linkedin = "https://www.linkedin.com/in/iietmoon/";
  return (
    <div className="core-footer pt-3">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div></div>
          <div className="text-center">
            <a className="navbar-brand" href="/">
              <img src={"/white-logo.png"} alt="logo" width="100px" />
            </a>
            <br />
            <a className="text-white" href={Linkedin}>
              Designed By Othmane N.
            </a>
          </div>
          <div></div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
