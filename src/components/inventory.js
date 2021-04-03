import PS51 from '../img/PS5-1.jpg';
import PS52 from '../img/PS5-2.jpg';
import PS53 from '../img/PS5-3.jpg';
import PS5DE1 from '../img/PS5-DE-1.jpg';
import PS5DE2 from '../img/PS5-DE-2.jpg';
import PS5DE3 from '../img/PS5-DE-3.jpg';
import XBOXSX1 from '../img/Series-X-1.jpg';
import XBOXSX2 from '../img/Series-X-2.jpg';
import XBOXSX3 from '../img/Series-X-3.jpg';
import XBOXSS1 from '../img/Series-S-1.jpg';
import XBOXSS2 from '../img/Series-S-2.jpg';
import XBOXSS3 from '../img/Series-S-3.jpg';
import NSW1 from '../img/Switch-1.jpg';
import NSW2 from '../img/Switch-2.jpg';
import NSW3 from '../img/Switch-3.jpg';

export const inventory = [
  {
    name: 'Playstation 5 Console',
    sku: 'ps5-001',
    price: 449.0,
    img1: PS51,
    img2: PS52,
    img3: PS53,
    basket: 2,
  },
  {
    name: 'Playstation 5 Digital Edition Console',
    sku: 'ps5-002',
    price: 359.99,
    img1: PS5DE1,
    img2: PS5DE2,
    img3: PS5DE3,
    basket: 0,
  },
  {
    name: 'Xbox Series X',
    sku: 'xbx-001',
    price: 449.99,
    img1: XBOXSX1,
    img2: XBOXSX2,
    img3: XBOXSX3,
    basket: 0,
  },
  {
    name: 'Xbox Series S',
    sku: 'xbx-002',
    price: 249.99,
    img1: XBOXSS1,
    img2: XBOXSS2,
    img3: XBOXSS3,
    basket: 0,
  },
  {
    name: 'Nintendo Switch',
    sku: 'ntd-001',
    price: 279.99,
    img1: NSW1,
    img2: NSW2,
    img3: NSW3,
    basket: 0,
  },
];
