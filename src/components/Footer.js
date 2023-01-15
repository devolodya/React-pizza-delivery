import "../scss/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div id="author">Created by Volodymyr Kravets</div>
      <div id="links">
        <a
          href="https://www.linkedin.com/in/volodymyr-kravets-0144b1236/"
          target="blank"
        >
          <img
            src="https://www.mhe-sme.org/wp-content/uploads/2017/12/linkedin-icon.png"
            alt="LinkedIn"
          />
        </a>
        <a href="https://github.com/voltailor" target="blank">
          <img
            src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
            alt="GitHub"
          />
        </a>
      </div>
      <div id="author">2022-2023</div>
    </footer>
  );
};

export default Footer;
