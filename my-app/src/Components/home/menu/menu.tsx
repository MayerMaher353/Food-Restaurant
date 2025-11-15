import MenuItemCard from './MenuItemCard';
import type { MenuItem } from '../../../types/menuTypes';
import '../css/style.css';

// Import all required assets (Replace with actual imports/paths)
import img1 from '../../../assets/images/menu images/our-menu-image-1.png';
import img2 from '../../../assets/images/menu images/our-menu-image-2.png';
import img3 from '../../../assets/images/menu images/our-menu-image-3.png';
import img4 from '../../../assets/images/menu images/our-menu-image-4.png';
import img5 from '../../../assets/images/menu images/our-menu-image-5.png';
import img6 from '../../../assets/images/menu images/our-menu-image-6.png';

// 🍽️ Data Array
const menuItemsData: MenuItem[] = [
  {
    id: 1,
    name: 'Crispy Calamari',
    price: 12.50,
    currency: '€',
    description: 'From childhood summers by the shore to late-night meals with loved ones, seafood.',
    imageUrl: img1,
    addToCartUrl: '#add-1',
  },
  {
    id: 2,
    name: 'Grilled Lobster Tail',
    price: 29.99,
    currency: '€',
    description: 'Succulent lobster tail grilled to perfection. served with garlic butter and lemon wedges.',
    imageUrl: img2,
    addToCartUrl: '#add-2',
  },
  {
    id: 3,
    name: 'Scallop Ceviche',
    price: 14.75,
    currency: '€',
    description: 'Fresh scallops marinated in citrus served with garlic & red onion and cilantro.',
    imageUrl: img3,
    addToCartUrl: '#add-3',
  },
  {
    id: 4,
    name: 'Seared Scallops',
    price: 24.99,
    currency: '€',
    description: 'Pan-seared scallops with a citrus glaze, served over a bed of creamy risotto.',
    imageUrl: img4,
    addToCartUrl: '#add-4',
  },
  {
    id: 5,
    name: 'Crab & Avocado Salad',
    price: 15.50,
    currency: '€',
    description: 'Lump crab meat tossed with avocado, cherry tomatoes, and lime dressing.',
    imageUrl: img5,
    addToCartUrl: '#add-5',
  },
  {
    id: 6,
    name: 'Crab Cakes',
    price: 18.50,
    currency: '€',
    description: 'Golden brown crab cakes served with a spicy remoulade sauce and fresh greens.',
    imageUrl: img6,
    addToCartUrl: '#add-6',
  },
];

function HomeMenuSection() {
  return (
    <section className="home-menu" id="home-menu">
      {/* Background Overlay */}
      <div className="overlay"></div>
      
      <div className="container">
        <div className="row">
          {/* Menu Title Block */}
          <div className="main-menu-text col-lg-12 col-sm-12 col-md-12">
            <p>OUR NEW DISHES</p>
            <h2>Crafted to impress - the ocean's finest on every plate</h2>
          </div>
          
          {/* Separator Line */}
          <div className="separator col-lg-12 col-sm-12 col-md-12"></div>
          
          {/* Menu Items Grid */}
          {menuItemsData.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}

          {/* Menu End CTA Block */}
          <div className="menu-end col-lg-12 col-sm-12 col-md-12">
            <p>
              <span>free</span>Crafted for Your Cravings: Today's Must-
              <a href="/menu">View Full Menu</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeMenuSection;