export type MenuItem = {
  id: string
  name: string
  category: string
  subcategory?: string
  description: string
  price: string
  ingredients?: string
  popular?: boolean
  image?: string
}

export const categories = [
  'Kingfisher Wraps',
  'Plain Chips',
  'Loaded Chips',
  'Tacos',
  'Wings',
  'Roti',
  'Kotas',
  'Comfort Food',
  'Sandwiches',
  'Spiral Chips',
  'Fried Treats',
  'Seafood Boil',
  'Drinks',
  'Extras'
]

export const menuItems: MenuItem[] = [
  // Kingfisher Wraps
  {
    id: 'wrap-1',
    name: 'Kingfisher Chicken Wrap',
    category: 'Kingfisher Wraps',
    description: 'Tender grilled chicken, fresh greens, and our signature sauce wrapped to perfection.',
    price: 'R40',
    popular: true,
    image: '/images/TACOS.png'
  },
  {
    id: 'wrap-2',
    name: 'Kingfisher Beef Wrap',
    category: 'Kingfisher Wraps',
    description: 'Juicy seasoned beef, crispy on the outside, soft inside, wrapped just right.',
    price: 'R40',
    popular: true,
    image: '/images/TACOS.png'
  },
  {
    id: 'wrap-3',
    name: 'Kingfisher with Chips',
    category: 'Kingfisher Wraps',
    description: 'Your choice of chicken or beef wrap loaded with golden chips. Ayoba combo!',
    price: 'R60',
    popular: true,
    image: '/images/TACOS.png'
  },

  // Plain Chips
  {
    id: 'chips-1',
    name: 'Plain Chips Small',
    category: 'Plain Chips',
    description: 'Golden, crispy, hand-cut perfection. Small size.',
    price: 'R30',
    image: '/images/POTATO CURLS.png'
  },
  {
    id: 'chips-2',
    name: 'Plain Chips Medium',
    category: 'Plain Chips',
    description: 'Golden, crispy, hand-cut perfection. Medium size.',
    price: 'R45',
    image: '/images/POTATO CURLS.png'
  },

  // Loaded Chips
  {
    id: 'lchips-1',
    name: 'Loaded Chips Small',
    category: 'Loaded Chips',
    description: 'Crispy chips piled high with melted cheese, russian bites, and fresh jalapeños. Nje!',
    price: 'R38',
    popular: true,
    image: '/images/TACOS WINGS CHIPS.jpg'
  },
  {
    id: 'lchips-2',
    name: 'Loaded Chips Medium',
    category: 'Loaded Chips',
    description: 'Extra generous loaded chips with cheese, russian, and jalapeños. The vibe.',
    price: 'R55',
    popular: true,
    image: '/images/TACOS WINGS CHIPS.jpg'
  },

  // Tacos
  {
    id: 'taco-1',
    name: 'Tacos (4 pieces)',
    category: 'Tacos',
    description: 'Four soft or crispy tacos loaded with seasoned beef, fresh toppings, and flavour for days.',
    price: 'R40',
    popular: true,
    image: '/images/TACOS2 .jpg'
  },
  {
    id: 'taco-2',
    name: 'Tacos & Chips',
    category: 'Tacos',
    description: 'Four tacos plus a side of our legendary golden chips. The combo!',
    price: 'R48',
    popular: true,
    image: '/images/TACOS2 .jpg'
  },
  {
    id: 'taco-3',
    name: 'Tacos, Chips & Wings',
    category: 'Tacos',
    description: 'The full flex: four tacos, loaded chips, and crispy wings. This is it!',
    price: 'R60',
    popular: true,
    image: '/images/TACOS2 .jpg'
  },

  // Wings
  {
    id: 'wing-1',
    name: 'Wings (5 pieces)',
    category: 'Wings',
    description: 'Five crispy, seasoned wings that hit different. Every single time.',
    price: 'R40',
    popular: true,
    image: '/images/TACOS WINGS CHIPS2.jpg'
  },
  {
    id: 'wing-2',
    name: 'Wings & Chips',
    category: 'Wings',
    description: 'Five crispy wings with a side of perfect golden chips. Level up!',
    price: 'R50',
    popular: true,
    image: '/images/TACOS WINGS CHIPS2.jpg'
  },

  // Roti
  {
    id: 'roti-1',
    name: 'Roti with Mine',
    category: 'Roti',
    description: 'Soft, warm roti filled with our special mine blend. Classic and proper.',
    price: 'R45',
    image: '/images/PHOTO-2026-03-18-20-38-05 2.jpg'
  },

  // Kotas
  {
    id: 'kota-1',
    name: 'Kite',
    category: 'Kotas',
    description: 'Toasted roll with chips, cheese, and polony. The starting point. The basics. Pure fire.',
    price: 'R20',
    image: '/images/KOTA.jpg'
  },
  {
    id: 'kota-2',
    name: 'Swift',
    category: 'Kotas',
    description: 'Kite vibes levelled up: chips, cheese, polony, and vienna. Now we talking!',
    price: 'R25',
    image: '/images/KOTA.jpg'
  },
  {
    id: 'kota-3',
    name: 'Falcon',
    category: 'Kotas',
    description: 'Swift but make it fly: chips, cheese, polony, egg, and bacon. Serious business.',
    price: 'R30',
    image: '/images/KOTA.jpg'
  },
  {
    id: 'kota-4',
    name: 'Sugarbird',
    category: 'Kotas',
    description: 'Falcon meets beef patty. This kota is no joke: chips, cheese, polony, egg, bacon, and beef. Sheesh!',
    price: 'R38',
    popular: true,
    image: '/images/KOTA.jpg'
  },
  {
    id: 'kota-5',
    name: 'Spreeu',
    category: 'Kotas',
    description: 'Sugarbird with russian drip. Chips, cheese, polony, egg, bacon, beef, and that russian goodness.',
    price: 'R42',
    popular: true,
    image: '/images/KOTA.jpg'
  },
  {
    id: 'kota-6',
    name: 'Cockatoo',
    category: 'Kotas',
    description: 'The ultimate flex kota. Everything—chips, cheese, polony, vienna, egg, bacon, russian, and our special sauce. This is the one.',
    price: 'R55',
    popular: true,
    image: '/images/KOTA.jpg'
  },

  // Comfort Food
  {
    id: 'comfort-1',
    name: 'Mogodu',
    category: 'Comfort Food',
    description: 'Slow-cooked tripe with spices that warm your soul. Real comfort, real life, no kak.',
    price: 'R70',
    image: '/images/MOGODU1.jpg'
  },
  {
    id: 'comfort-2',
    name: 'Cow Head',
    category: 'Comfort Food',
    description: 'Tender, seasoned cow head meat. The real deal. Sunday dinner energy.',
    price: 'R70',
    image: '/images/MOGODU1.jpg'
  },
  {
    id: 'comfort-3',
    name: 'Cow Heals',
    category: 'Comfort Food',
    description: 'Soft, melt-in-your-mouth cow heals with that proper Monate vibe.',
    price: 'R70',
    image: '/images/MOGODU1.jpg'
  },
  {
    id: 'comfort-4',
    name: 'Liver, Tongue & Heart Combo',
    category: 'Comfort Food',
    description: 'The trifecta: liver, tongue, and heart all seasoned to perfection. Ayoba meals!',
    price: 'R70',
    image: '/images/MOGODU1.jpg'
  },

  // Sandwiches
  {
    id: 'sand-1',
    name: 'Chicken Mayo Sandwich',
    category: 'Sandwiches',
    description: 'Tender chicken with creamy mayo between fresh bread.',
    price: 'R35',
    image: '/images/TACOS.png'
  },
  {
    id: 'sand-2',
    name: 'Egg Mayo Sandwich',
    category: 'Sandwiches',
    description: 'Fluffy eggs with smooth mayo. Classic and filling.',
    price: 'R30',
    image: '/images/TACOS.png'
  },
  {
    id: 'sand-3',
    name: 'Bacon & Cheese Sandwich',
    category: 'Sandwiches',
    description: 'Crispy bacon and melted cheese. No words needed.',
    price: 'R40',
    image: '/images/TACOS.png'
  },
  {
    id: 'sand-4',
    name: 'Mine & Cheese Sandwich',
    category: 'Sandwiches',
    description: 'Our special mine blend with melted cheese. Proper combo.',
    price: 'R35',
    image: '/images/TACOS.png'
  },

  // Spiral Chips
  {
    id: 'spiral-1',
    name: 'Spiral Chips Small',
    category: 'Spiral Chips',
    description: 'Twisted, crispy spiral chips. A vibe of their own.',
    price: 'R32',
    image: '/images/POTATO CURLS.png'
  },
  {
    id: 'spiral-2',
    name: 'Spiral Chips Medium',
    category: 'Spiral Chips',
    description: 'More spiral, more crunch, more flavour. Go big.',
    price: 'R48',
    image: '/images/POTATO CURLS.png'
  },
  {
    id: 'spiral-3',
    name: 'Spiral Chips Large',
    category: 'Spiral Chips',
    description: 'The full spiral experience. Maximum munchies.',
    price: 'R65',
    image: '/images/POTATO CURLS.png'
  },

  // Fried Treats
  {
    id: 'fried-1',
    name: 'Buldak Springrolls (3)',
    category: 'Fried Treats',
    description: 'Three crispy springrolls with that spicy kick you know and love.',
    price: 'R25',
    image: '/images/ICE CREAM.png'
  },
  {
    id: 'fried-2',
    name: 'Fish & Chips',
    category: 'Fried Treats',
    description: 'Golden fried fish that hits proper, served with chips on the side.',
    price: 'R55',
    image: '/images/TACOS WINGS CHIPS.jpg'
  },
  {
    id: 'fried-3',
    name: 'Chicken Tenders (5)',
    category: 'Fried Treats',
    description: 'Five crispy, tender chicken strips. Perfect for saucing.',
    price: 'R45',
    image: '/images/TACOS WINGS CHIPS2.jpg'
  },
  {
    id: 'fried-4',
    name: 'Chicken Tenders (10)',
    category: 'Fried Treats',
    description: 'Ten crispy chicken tenders for the real appetite. Come right!',
    price: 'R80',
    image: '/images/TACOS WINGS CHIPS2.jpg'
  },
  {
    id: 'fried-5',
    name: 'Waffle Fries Small',
    category: 'Fried Treats',
    description: 'Criss-cross, crispy waffle fries. A different energy.',
    price: 'R35',
    image: '/images/POTATO CURLS.png'
  },
  {
    id: 'fried-6',
    name: 'Waffle Fries Medium',
    category: 'Fried Treats',
    description: 'Double the waffle, double the vibes. Medium size.',
    price: 'R52',
    image: '/images/POTATO CURLS.png'
  },

  // Seafood Boil
  {
    id: 'seafood-1',
    name: 'Tuinfluiter',
    category: 'Seafood Boil',
    description: '4 Prawns, 3 Baby Potatoes, 2 Boiled Eggs, 2 Sweet Corn, 3 Calamari Rings. The starter seafood experience.',
    price: 'R170',
    image: '/images/ICE CREAM.png'
  },
  {
    id: 'seafood-2',
    name: 'Tarentaal',
    category: 'Seafood Boil',
    description: '5 Prawns, 2 Mussels, 2 Calamari Rings, 1 Lobster Tail, 3 Sausages, 4 Baby Potatoes, 2 Corn, 3 Boiled Eggs, 3 Sweet Potatoes. The proper mix.',
    price: 'R320',
    popular: true,
    image: '/images/ICE CREAM.png'
  },
  {
    id: 'seafood-3',
    name: 'Honeybird',
    category: 'Seafood Boil',
    description: '10 Prawns, 6 Sausages, 4 Mussels, 8 Baby Potatoes, 4 Calamari Rings, 4 Boiled Eggs, 1 Lobster Tail, 4 Corn, 5 Sweet Potatoes. The ultimate flex seafood experience.',
    price: 'R480',
    popular: true,
    image: '/images/ICE CREAM.png'
  },

  // Drinks
  {
    id: 'drink-1',
    name: 'Coke/Sprite/Stoney/Fanta (250ml)',
    category: 'Drinks',
    description: 'Cold, refreshing, exactly what you need. Pick your poison.',
    price: 'R6',
    image: '/images/PHOTO-2026-03-18-20-38-09 3.jpg'
  },
  {
    id: 'drink-2',
    name: 'Coke/Sprite/Stoney/Fanta (500ml)',
    category: 'Drinks',
    description: 'More vibes, more quench. 500ml of pure cold refreshment.',
    price: 'R15',
    image: '/images/PHOTO-2026-03-18-20-38-09 3.jpg'
  },
  {
    id: 'drink-3',
    name: 'Coke/Sprite/Stoney/Fanta (2L)',
    category: 'Drinks',
    description: 'The family size. Bring your crew.',
    price: 'R28',
    image: '/images/PHOTO-2026-03-18-20-38-09 3.jpg'
  },
  {
    id: 'drink-4',
    name: 'Schweppes (dry lemon, soda water, pineapple, tangerine, pomegranate, tonic)',
    category: 'Drinks',
    description: 'Fancy bubbles. Pick your flavour and upgrade the moment.',
    price: 'R24',
    image: '/images/PHOTO-2026-03-18-20-38-09 3.jpg'
  },
  {
    id: 'drink-5',
    name: 'Valpre Still Water',
    category: 'Drinks',
    description: 'Pure, clean, hydration the right way.',
    price: 'R13',
    image: '/images/PHOTO-2026-03-18-20-38-09 3.jpg'
  },
  {
    id: 'drink-6',
    name: 'Valpre Sparkling Water',
    category: 'Drinks',
    description: 'Bubbles without the sugar. Hydrate with style.',
    price: 'R14',
    image: '/images/PHOTO-2026-03-18-20-38-09 3.jpg'
  },

  // Extras
  {
    id: 'extra-1',
    name: 'Cheese',
    category: 'Extras',
    description: 'Melted goodness to add to anything.',
    price: 'R3'
  },
  {
    id: 'extra-2',
    name: 'Egg',
    category: 'Extras',
    description: 'Boiled or fried. Your call.',
    price: 'R3.50'
  },
  {
    id: 'extra-3',
    name: 'Russian',
    category: 'Extras',
    description: 'That russian drip. The upgrade.',
    price: 'R10'
  },
  {
    id: 'extra-4',
    name: 'Beef Patty',
    category: 'Extras',
    description: 'Extra meat punch to your order.',
    price: 'R10'
  },
  {
    id: 'extra-5',
    name: 'Vienna',
    category: 'Extras',
    description: 'That vienna sausage love.',
    price: 'R6'
  },
  {
    id: 'extra-6',
    name: 'Buldak Springroll',
    category: 'Extras',
    description: 'Add one to your order. That spicy kick.',
    price: 'R8'
  },
  {
    id: 'extra-7',
    name: 'Fish Fillet',
    category: 'Extras',
    description: 'Crispy fish add-on.',
    price: 'R18'
  },
  {
    id: 'extra-8',
    name: 'Chicken Tender',
    category: 'Extras',
    description: 'One crispy chicken tender.',
    price: 'R10'
  },
  {
    id: 'extra-9',
    name: 'Boiled Egg',
    category: 'Extras',
    description: 'Extra protein.',
    price: 'R3.50'
  },
  {
    id: 'extra-10',
    name: 'Baby Potato',
    category: 'Extras',
    description: 'One baby potato. Add it to your seafood or kota.',
    price: 'R3'
  },
  {
    id: 'extra-11',
    name: 'Sausage',
    category: 'Extras',
    description: 'One juicy sausage.',
    price: 'R5'
  },
  {
    id: 'extra-12',
    name: 'Lobster Tail',
    category: 'Extras',
    description: 'Premium seafood add-on. Make it special.',
    price: 'R45'
  },
  {
    id: 'extra-13',
    name: 'Pap',
    category: 'Extras',
    description: 'Creamy pap to go with your comfort food.',
    price: 'R10'
  },
  {
    id: 'extra-14',
    name: 'Salad',
    category: 'Extras',
    description: 'Fresh salad side.',
    price: 'R5'
  },
  {
    id: 'extra-15',
    name: 'Extra Mogodu',
    category: 'Extras',
    description: 'Add more tripe to your meal. Go big.',
    price: 'R30'
  },
  {
    id: 'extra-16',
    name: 'Extra Cow Heals',
    category: 'Extras',
    description: 'More of that soft, tender goodness.',
    price: 'R30'
  },
  {
    id: 'extra-17',
    name: 'Extra Liver',
    category: 'Extras',
    description: 'More liver, more iron, more life.',
    price: 'R30'
  },
  {
    id: 'extra-18',
    name: 'Extra Heart',
    category: 'Extras',
    description: 'More heart. Literally.',
    price: 'R30'
  },
  {
    id: 'extra-19',
    name: 'Extra Tongue',
    category: 'Extras',
    description: 'More of that tender, flavourful tongue.',
    price: 'R30'
  }
]
