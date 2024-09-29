"use client";
import MealItem from './MealItem';

interface Meals {
  id: number;
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

interface RecipeListProps {
  meals: Meals[];
}

export default function MealGrid({ meals }: RecipeListProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
