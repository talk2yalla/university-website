const About = () => {
	return (
  
    <nav className="nav-container">
      <div className="nav-center wrapper">
        <div className="logo-section">
          <a href="./"
            ><img
              src="./icons//university.svg"
              alt="university logo"
              className="logo"
          /></a>
        </div>
        <div className="hamburger">
          <img src="./icons/bars.svg" alt="sidebar button" />
        </div>
        <div className="nav-links-main">
          <ul className="nav-links">
            <li><a className="nav-link" href="./">Home</a></li>
            <li><a className="nav-link active" href="./about.html">about</a></li>
            <li><a className="nav-link" href="./courses.html">courses</a></li>
            <li><a className="nav-link" href="./contact.html">contact</a></li>
          </ul>
        </div>
        <div className="nav-social-links-main">
          <ul className="nav-social-links">
            <li className="nav-social-link">
              <a
                href="https://www.linkedin.com/in/srikanth-racharla-9015041a0/"
                target="_blank"
              >
                <img src="./icons/linkedin.svg" alt="srikanth linkedin" />
              </a>
            </li>
            <li className="nav-social-link">
              <a
                href="https://www.instagram.com/racharlasrikanth/"
                target="_blank"
              >
                <img src="./icons/instagram.svg" alt="srikanth instagram" />
              </a>
            </li>
            <li className="nav-social-link">
              <a
                href="https://www.youtube.com/learnwithsrikanthracharla"
                target="_blank"
              >
                <img src="./icons/youtube.svg" alt="srikanth youtube" />
              </a>
            </li>
            <li className="nav-social-link">
              <a href="https://github.com/racharlasrikanth" target="_blank">
                <img src="./icons/github.svg" alt="srikanth github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>



    <aside className="sidebar-container">
      <div className="sidebar-center wrapper">
        <div className="side-header">
          <div className="logo-section">
            <a href="#home"
              ><img
                src="./icons//university.svg"
                alt="university logo"
                className="logo"
            /></a>
          </div>
          <div className="close-button">
            <img src="./icons/close.svg" alt="sidebar close" />
          </div>
        </div>
        <div className="sidebar-content">
          <div className="sidebar-links-main paddingTopMobile-fifty">
            <ul className="sidebar-links">
              <li><a className="nav-link" href="./">Home</a></li>
              <li><a className="nav-link active" href="./about.html">about</a></li>
              <li><a className="nav-link" href="./courses.html">courses</a></li>
              <li><a className="nav-link" href="./contact.html">contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </aside>


  
    <div className="page-hero-container">
      <div className="page-hero">
        <div className="hero-img-component">
          <div className="img-container">
            <img src="./assets/about-banner.jpeg" alt="home page hero image" />
          </div>
        </div>
        <div
          className="hero-box paddingTopMobile-thirty paddingBottomMobile-thirty"
        >
          <div className="hero-content wrapper text-container text-center">
            <h1 className="heading">Vellore Institute of Technology</h1>
            <h3 className="small-heading">your future is here</h3>
          </div>
        </div>
      </div>
    </div>

    <div
      className="single-featured-container reverse-content light-blue-background"
    >
      <div className="single-featured-center wrapper">
        <div
          className="section-title paddingTopDesktop-hundred paddingTopMobile-fifty"
        >
          <h3 className="title">about us</h3>
          <div className="underline"></div>
        </div>
        <section
          className="single-featured paddingTopDesktop-fifty paddingBottomDesktop-hundred paddingTopMobile-fifty paddingBottomMobile-fifty"
        >
          <div
            className="image-component single-featured-image paddingBottomMobile-fifty"
          >
            <img
              src="./assets/about-section.jpeg"
              alt="about section featured content"
            />
          </div>
          <div className="single-featured-text-component">
            <div className="featured-center">
              <div className="about-info">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                  laudantium ipsa nam. Perferendis quam accusamus nostrum quidem
                  corrupti quia voluptatem cupiditate pariatur ullam. Deleniti
                  ratione necessitatibus, asperiores repellat recusandae
                  laudantium earum. Voluptatibus eaque illo provident odit
                  reprehenderit nulla, veniam architecto!
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                  praesentium earum quia officia hic tenetur aliquam nisi
                  perspiciatis rerum repellat perferendis accusamus sequi
                  temporibus, neque aliquid, voluptatem natus. Ut provident
                  sapiente, delectus voluptas aperiam animi. Ipsa necessitatibus
                  asperiores, rerum commodi vel perspiciatis. Nobis dignissimos,
                  iusto, reprehenderit eveniet itaque nostrum non id consectetur
                  architecto eum alias deleniti aperiam harum est ducimus.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquid nesciunt dicta quis neque voluptas mollitia fugit
                  eveniet pariatur. Vero, expedita.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div className="contact-promotion-container light-pink-background">
      <div className="contact-promotion-center wrapper">
        <div
          className="section-title paddingTopDesktop-hundred paddingTopMobile-fifty"
        >
          <h3 className="title">contact us for your future</h3>
          <div className="underline"></div>
        </div>
        <section
          className="contact-promotion paddingTopDesktop-fifty paddingBottomDesktop-hundred paddingTopMobile-fifty paddingBottomMobile-fifty"
        >
          <div className="contact-promo-img">
            <img
              src="./assets/contact-promotion.jpeg"
              alt="contact promotion image"
            />
            <div className="contact-info-container text-center text-container">
              <h2 className="contact-heading">
                enroll for our various b.tech courses anywhere from india
              </h2>
              <a href="./contact.html" className="button-primary-light"
                >contact us</a
              >
            </div>
          </div>
        </section>
      </div>
    </div>

    <div className="footer-container">
      <div className="footer-center wrapper">
        <div className="footer-links-main">
          <ul className="footer-links">
            <li><a className="footer-link" href="./">Home</a></li>
            <li><a className="footer-link active" href="./about.html">about</a></li>
            <li><a className="footer-link" href="./courses.html">courses</a></li>
            <li><a className="footer-link" href="./contact.html">contact</a></li>
          </ul>
        </div>
        <div className="social-links-main">
          <ul className="social-links">
            <li className="social-link">
              <a
                href="https://www.linkedin.com/in/srikanth-racharla-9015041a0/"
                target="_blank"
              >
                <img src="./icons/linkedin.svg" alt="srikanth linkedin" />
              </a>
            </li>
            <li className="social-link">
              <a
                href="https://www.instagram.com/racharlasrikanth/"
                target="_blank"
              >
                <img src="./icons/instagram.svg" alt="srikanth instagram" />
              </a>
            </li>
            <li className="social-link">
              <a
                href="https://www.youtube.com/learnwithsrikanthracharla"
                target="_blank"
              >
                <img src="./icons/youtube.svg" alt="srikanth youtube" />
              </a>
            </li>
            <li className="social-link">
              <a href="https://github.com/racharlasrikanth" target="_blank">
                <img src="./icons/github.svg" alt="srikanth github" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copy-right">
          <p>
            Copyright 2021 - <span className="copyright-date">2022</span>, Made by
            Racharla Srikanth
          </p>
        </div>
      </div>
    </div>

  )
};
export default About;
