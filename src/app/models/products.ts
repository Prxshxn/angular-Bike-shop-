export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string
  }
  
  export const products = [
    {
      id: 1,
      name: 'BMW S100RR',
      price: 10000,
      description: 'Nice Bike Blue',
      category: 'Heavy Bike',
      image: './assets/img/png/Bike2.jpg'
    },
    {
      id: 2,
      name: 'Ducati Panigale V4',
      price: 15000,
      description: 'Smooth Red Bike',
      category: 'Heavy Bike',
      image: './assets/img/png/Bike3.png'
    },
    {
      id: 3,
      name: 'Yamaha R1',
      price: 17000,
      description: 'Dark knight ',
      category: 'Racing Bike',
      image: './assets/img/png/Bike4.webp'
    },
  
  ];