import Link from 'next/link'
import { getMeals } from '@/lib/meals'
import MealGrid from '@/components/meals/MealGrid';
export default async function MealPage() {
    const meals = await getMeals();
    return <>
        <header className="text-center py-4">
            <h1 className='text-3xl md:text-5xl mb-4 text-yellow-600 font-bold'>
                Delicious meals , created <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-300">by you</span>
            </h1>
            <p className='text-lg md:text-xl mb-4 font-extrabold text-white'>Choose your favorite recipe and cook it yourself. It is easy and fun !</p>
            <p className="mt-6">
                <Link href="/meals/share"
                className='inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-lg font-bold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all'
                >
                    Share Your Favorite Recipe
                </Link>
            </p>
        </header>
        <main className="px-0 md:px-8 mt-10">
            <MealGrid meals={meals} />
        </main>
    </>
}