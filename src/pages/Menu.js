import { espressoItems,coldItems,pastryItems } from '../data/products';


//card 
function MenuItem({ item }) {
  return (
    <div className="menu-item-menu">
      <div className="item-img">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="menu-info-menu">
        <p className="info-title-menu">{item.name}</p>
        <p className="info-desc-menu">{item.desc}</p>
      </div>
      <p className="item-price-menu">{item.price}</p>
    </div>
  );
}
function MenuSection({ title, items }) {
  return (
    <div className="menu-body-menu">
      <div className="menu-section-menu">
        <div className="menu-header-menu">
          <h2 className="menu-title-menu">{title}</h2>
        </div>
        <div className="menu-grid-menu">
          {items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default function Menu() {
  return (
    <>

    <section class="hero-section-menu">
      <div class="content-hero-menu">
        <div class="hero-tag-menu">Specialty Coffee · Crafted Daily</div>
        <h1 class="hero-title-menu">Our <em>Menu</em></h1>
      </div>
        
    </section>
      <div className="fliter-navnbar">
        <div className="fliter-item">ALL</div>
        <div className="fliter-item">ESPRESSO</div>
        <div className="fliter-item">COLD DRINKS</div>
        <div className="fliter-item">MATCHA SERIES</div>
        <div className="fliter-item">PASTRIES</div>
      </div>

      <MenuSection title={<>
        <em>Espresso</em> Series
        </>} 
        items={espressoItems} />
      <MenuSection title={<>
        <em>Cold </em>Drinks
        </>} 
        items={coldItems} />
      <MenuSection title={
        <><em>Pastries</em>
        </>}
         items={pastryItems} />
    </>
  );
}