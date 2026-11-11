import frappe from '../images/pexels-meraj-kazi-186120822-11299735.jpg';
import latte from '../images/pexels-ardalan-hamedani-295715724-13447735.jpg';
import matcha from '../images/pexels-neslihan-97164342-34090799.jpg';
import flatWhite from '../images/pexels-david-le-2158927177-35697408.jpg';
import americano from '../images/pexels-bacho-nadiradze-2944810-34148505.jpg';
import espresso from '../images/espresso.jpg';
import americano1 from '../images/americano.jpg';
import latte1 from '../images/latte.jpg';
import flatWhite1 from '../images/flatWhite.jpg';
import cappuccino from '../images/cappuccino.jpg';
import cortado from '../images/cortado.jpg';
import coldBrew from '../images/coldBrew.jpg';
import icedLatte from '../images/icedLatte.jpg';
import frappe1 from '../images/frappe.jpg';
import icedAmericano from '../images/icedAmericano.jpg';
import croissant from '../images/croissant.jpg';
import painAuChocolat from '../images/painAuChocolat.jpg';
import almondTart from '../images/almondTart.jpg';
import cinnamonRolls from '../images/cinnamonRolls.jpg';
export const products = [
  { id: 1, name: "Dark Chocolate Frappe", price: "7.50$", isLarge: true ,image: frappe },
  { id: 2, name: "Latte",price: "5.50$", isLarge: false ,image: latte},
  { id: 3, name: "Classic Matcha", price: "7.50$", isLarge: false ,image: matcha},
  { id: 4, name: "Flat White", price:"7.50$" , isLarge: false,image: flatWhite },
  { id: 5, name: "Americano",price: "7.50$", isLarge: false ,image: americano },
];


export const espressoItems = [
  { id: 1, name: "Single Espresso",desc: "Pure, concentrated. Origin-specific single shot.", price: "3.50$", img: espresso },
  { id: 2, name: "Americano",desc: "Double shot, hot water. Clean and bold.",  price: "4.50$", img: americano1 },
  { id: 3, name: "Latte",desc: "Smooth steamed milk, silky microfoam, double shot.", price: "5.50$", img: latte1 },
  { id: 4, name: "Flat White", desc: "Ristretto base, velvety milk. Strong and refined.", price: "5.50$", img: flatWhite1 },
  { id: 5, name: "Cappuccino", desc: "Equal parts espresso, steam, and foam. A classic.", price: "5.00$", img: cappuccino },
  { id: 6, name: "Cortado",desc: "Equal parts espresso and warm milk. No foam.", price: "5.00$", img: cortado },
];

export const coldItems = [
  { id: 1, name: "Cold Brew",desc: "Steeped 18 hours. Smooth, low-acid, naturally sweet.",price: "6.00$", img: coldBrew },
  { id: 2, name: "Iced Latte", desc: "Double shot over ice, topped with cold milk.", price: "6.00$", img: icedLatte},
  { id: 3, name: "Dark Chocolate Frappé",  desc: "Blended with 72% dark chocolate, espresso, and cream.",price: "7.50$", img: frappe1},
  { id: 4, name: "Iced Americano",desc: "Bold double shot poured over a glass of ice.",price: "5.50$", img: icedAmericano },
];

export const pastryItems = [
  { id: 1, name: "Butter Croissant",desc: "Flaky, laminated, baked fresh each morning.",price: "3.50$", img: croissant },
  { id: 2, name: "Pain au Chocolat",desc: "Dark chocolate folded into buttery pastry dough.", price: "4.00$", img: painAuChocolat },
  { id: 3, name: "Almond Frangipane Tart",desc: "Crisp shell, almond cream, toasted flaked almonds.",price: "7.50$", img: almondTart },
  { id: 4, name: "Cinnamon Rolls",desc: "Soft brioche dough, brown butter glaze, warm spice.",price: "7.50$", img: cinnamonRolls },
];
