import { products } from '../data/products';
import philosopyImg from '../images/pexels-vishnu-panday-94089132-31106210.jpg';
import { Navbar } from '../NavBar';
import { Link } from 'react-router-dom';
function Item({products}){
  return(
     <div className={`menu-item ${products.isLarge ? 'large' : ''}`}>
      <img src={products.image} alt={products.name} />
      <div className="menu-info">
        <span className="price">${products.price}</span>
        <h2>{products.name}</h2>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <div>
      
    <div>
        <section className="hero-section" id="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <div className="hero-tag">Specialty Coffee · Est. 2020</div>
          <h1 className="hero-title">
            Every Cup<br /><em>Tells a Story</em>
          </h1>
          <p className="hero-sub">
            Meticulously sourced beans, crafted with precision. A sanctuary for
            those who believe coffee is not a habit — it's a ritual.
          </p>
          <div className="hero-actions">
            {/* From Uiverse.io */}
            <Link to="/menu" className="learn-more" style={{ textDecoration: 'none' }}>
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">
                Explore Menu
              </span>
            </Link>
          </div>
        </div>
        <div  id="scroll-to-top">
          <lottie-player
            src="lottieflow-scroll-top-01-C9A96E-easey.json"
            background="transparent"
            speed="0.9"
            style={{ width: "60px", height: "60px" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </section>

      <section className="philosophy-section" id="philosophy-section">
        <div className="container-fluid">
          <div className="row g-0">
            <div className="img-philosophy col-12 col-lg-6 col-md-4">
              <img
                src={philosopyImg}
                alt="coffee cup"
              />
            </div>
            <div className="col-12 col-lg-6 col-md-8">
              <div className="philosophy-content">
                <div id="philosophy-tag">
                  <span className="line"></span>
                  <span>OUR PHILOSOPHY</span>
                </div>
                <h1 id="philosophy-title">
                  Crafted with <em>Obsessive Care</em>
                </h1>
                <p id="philosophy-parg">
                  We dont brew coffee. We Study origin, elevation, processing
                  method, and roast profile to bring out every note a bean has
                  to offer. From farm to cup, nothing is left to chance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="menu">
        <section className="menu-grid">
          {products.map((products) => (
            <Item key={products.id} products={products}/>
          ))}
        </section>
      </div>

      <section className="opentime">
        <div className="container opentime-div">
          <h1 className="opentime-title">
            Begin your <br />
            <em>Daily Ritual</em>
          </h1>
          <div className="opentime-tag">
            Open every day, 7am - 10pm <br />
            Dine in, takeaway, or pre-order online
          </div>
        </div>
      </section>

      <footer>
        <div id="contant">
          <div className="footer-brand">
            <a href="#hero-section" className="nav-logo">Coffee.Cafe</a>
            <p className="footer-par">
              Where every cup is a carefully composed moment of pleasure. Come
              as you are. Leave inspired.
            </p>
          </div>
          <div className="footer-block menu">
            <h4>MENU</h4>
            <ul>
              <li><a href="">Espresso</a></li>
              <li><a href="">Cold Drinks</a></li>
              <li><a href="">Matcha series</a></li>
              <li><a href="">Pastries</a></li>
              <li><a href="">Seasonal Specials</a></li>
            </ul>
          </div>
          <div className="footer-block visit">
            <h4>VISIT</h4>
            <ul>
              <li><a href="">Our Location</a></li>
              <li><a href="">Hours & Info</a></li>
              <li><a href="">Private Events</a></li>
              <li><a href="">Careers</a></li>
            </ul>
          </div>
          <div className="footer-block connect">
            <h4>CONNECT</h4>
            <ul>
              <li><a href="">Instagram</a></li>
              <li><a href="">Tiktok</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Coffee Cafe. All rights reserved.</span>
          <span>Crafted with ♥ for coffee lovers</span>
        </div>
      </footer>
    </div>
    </div>
    
  );
}