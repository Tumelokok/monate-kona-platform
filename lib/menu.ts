export type MenuItem = {
  id: string
  name: string
  category: string
  description: string
  price: string
  ingredients: string
  calories: string
  prepTime: string
  popular: boolean
  image: string
}

export const categories = [
  'Comfort Food',
  'Wraps',
  'Kotas',
  'Loaded Chips',
  'Plain Chips',
  'Tacos',
  'Wings',
  'Roti',
  'Drinks',
  'Extras'
]

export const menuItems: MenuItem[] = [
  {
    id: 'comfort-1',
    name: 'Spicy Bobotie Bowl',
    category: 'Comfort Food',
    description: 'Slow-cooked ground beef with fragrant spices, turmeric rice, and toasted almonds.',
    price: 'R129',
    ingredients: 'Beef, curry, chutney, rice, almonds',
    calories: '650 kcal',
    prepTime: '18 min',
    popular: true,
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'comfort-2',
    name: 'Heritage Lamb Shank',
    category: 'Comfort Food',
    description: 'Braised lamb shank with roasted veg, gravy, and creamy mash.',
    price: 'R189',
    ingredients: 'Lamb, potato, carrots, rosemary',
    calories: '720 kcal',
    prepTime: '28 min',
    popular: false,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'wrap-1',
    name: 'Chakalaka Chicken Wrap',
    category: 'Wraps',
    description: 'Grilled chicken, chakalaka slaw, avo crema and pickled onions in a toasted wrap.',
    price: 'R89',
    ingredients: 'Chicken, chakalaka, avo, wrap',
    calories: '480 kcal',
    prepTime: '12 min',
    popular: true,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'kota-1',
    name: 'Signature Kota Royale',
    category: 'Kotas',
    description: 'Toasted roll filled with steak, cheese, chilli mayo and loaded chips.',
    price: 'R99',
    ingredients: 'Roll, steak, cheese, chips, sauce',
    calories: '880 kcal',
    prepTime: '10 min',
    popular: true,
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'chips-1',
    name: 'Truffle Peri-Peri Chips',
    category: 'Loaded Chips',
    description: 'Crispy chips tossed in truffle oil, peri-peri, parmesan and herbs.',
    price: 'R69',
    ingredients: 'Potato, truffle oil, peri-peri, parmesan',
    calories: '520 kcal',
    prepTime: '9 min',
    popular: false,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'chips-2',
    name: 'Classic Hand-Cut Chips',
    category: 'Plain Chips',
    description: 'Golden hand-cut chips served with house seasoning and dipping sauce.',
    price: 'R45',
    ingredients: 'Potato, sea salt, herbs',
    calories: '430 kcal',
    prepTime: '8 min',
    popular: false,
    image: 'https://images.unsplash.com/photo-1516685018646-549e8b3d01ca?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'taco-1',
    name: 'Smoked Beef Tacos',
    category: 'Tacos',
    description: 'Soft tortillas stacked with smoked beef, salsa verde and shaved cabbage.',
    price: 'R95',
    ingredients: 'Beef, tortilla, cabbage, salsa',
    calories: '540 kcal',
    prepTime: '11 min',
    popular: true,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'wing-1',
    name: 'Maple Peri Wings',
    category: 'Wings',
    description: 'Crispy wings glazed with maple peri-peri and served with lemon aioli.',
    price: 'R99',
    ingredients: 'Chicken wings, peri-peri, maple, aioli',
    calories: '650 kcal',
    prepTime: '15 min',
    popular: false,
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'roti-1',
    name: 'Cape Malay Roti',
    category: 'Roti',
    description: 'Soft roti filled with curried chicken, tomatoes and fresh coriander.',
    price: 'R89',
    ingredients: 'Roti, chicken curry, coriander, tomato',
    calories: '590 kcal',
    prepTime: '13 min',
    popular: false,
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'drink-1',
    name: 'Rooibos Citrus Cooler',
    category: 'Drinks',
    description: 'Chilled rooibos tea with lemon, mint and a touch of honey.',
    price: 'R49',
    ingredients: 'Rooibos, lemon, mint, honey',
    calories: '120 kcal',
    prepTime: '4 min',
    popular: false,
    image: 'https://images.unsplash.com/photo-1505253219343-7f1a8b8c3bf8?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'extra-1',
    name: 'Spicy Mango Chutney',
    category: 'Extras',
    description: 'Sweet, spicy mango chutney to brighten every bite.',
    price: 'R25',
    ingredients: 'Mango, chilli, sugar, vinegar',
    calories: '90 kcal',
    prepTime: '2 min',
    popular: false,
    image: 'https://images.unsplash.com/photo-1514518196555-52ae39e073b7?auto=format&fit=crop&w=1200&q=80'
  }
]
