export default function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <div className="about-hero-content">
          <div className="hero-tag">Est. 2020 · Beirut</div>
          <h1 className="about-title">Our <em>Story</em></h1>
        </div>
      </section>

      <section className="about-origin container">
        <div className="about-origin-grid">
          <div className="about-text">
            <span className="section-label">HOW IT STARTED</span>
            <h2>Born from a <em>Passion</em></h2>
            <p>
              What started as a small corner in the city became a sanctuary for
              those who take coffee seriously. We opened our doors in 2020 with
              one belief: that every cup deserves intention, care, and craft.
            </p>
            <p>
              We travel to source our beans directly from farms in Ethiopia,
              Colombia, and Guatemala — building relationships that go beyond
              transactions.
            </p>
          </div>
          <div className="about-img-wrap">
            <img src="images/about-origin.jpg" alt="Our origin" />
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <span className="section-label">WHAT WE STAND FOR</span>
          <h2>Our <em>Values</em></h2>
          <div className="values-grid">
            <div className="value-card">
              <i className="fa-solid fa-seedling"></i>
              <h4>Sourced with Care</h4>
              <p>Direct trade with farmers. Transparent origins. Every bean has a story.</p>
            </div>
            <div className="value-card">
              <i className="fa-solid fa-fire-burner"></i>
              <h4>Roasted to Order</h4>
              <p>We roast small batches weekly to guarantee peak freshness in every cup.</p>
            </div>
            <div className="value-card">
              <i className="fa-solid fa-mug-hot"></i>
              <h4>Crafted with Precision</h4>
              <p>Temperature, grind, ratio — nothing is left to chance behind our bar.</p>
            </div>
            <div className="value-card">
              <i className="fa-solid fa-heart"></i>
              <h4>Community First</h4>
              <p>A space where people slow down, connect, and feel at home.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team container">
        <span className="section-label">THE PEOPLE</span>
        <h2>Meet the <em>Team</em></h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-img"><img src="images/team1.jpg" alt="Founder" /></div>
            <h4>Hadi Khalil</h4>
            <span>Founder & Head Barista</span>
          </div>
          <div className="team-card">
            <div className="team-img"><img src="images/team2.jpg" alt="Roaster" /></div>
            <h4>Sara Mansour</h4>
            <span>Lead Roaster</span>
          </div>
          <div className="team-card">
            <div className="team-img"><img src="images/team3.jpg" alt="Pastry Chef" /></div>
            <h4>Lara Khoury</h4>
            <span>Pastry Chef</span>
          </div>
        </div>
      </section>

    </div>
  );
}