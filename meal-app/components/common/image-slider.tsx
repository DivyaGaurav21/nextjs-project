'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import burgerImg from '@/images/burger.jpg';
import curryImg from '@/images/curry.jpg';
import dumplingsImg from '@/images/dumplings.jpg';
import macncheeseImg from '@/images/macncheese.jpg';
import pizzaImg from '@/images/pizza.jpg';
import schnitzelImg from '@/images/schnitzel.jpg';
import tomatoSaladImg from '@/images/tomato-salad.jpg';

const images = [
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: curryImg, alt: 'A delicious, spicy curry' },
  { image: dumplingsImg, alt: 'Steamed dumplings' },
  { image: macncheeseImg, alt: 'Mac and cheese' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: schnitzelImg, alt: 'A delicious schnitzel' },
  { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={`w-full h-full object-cover absolute top-0 left-0 transition-all duration-500 ease-in-out transform ${
            index === currentImageIndex
              ? 'opacity-100 z-10 scale-100 translate-x-0 rotate-0'
              : 'opacity-0 scale-110 -translate-x-4 -rotate-6'
          }`}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
