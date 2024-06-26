import Link from 'next/link'
import classes from './page.module.css'
import MealGrid from '@/components/meals/MealGrid'
import { getMeals } from '@/lib/meals'
export default async function MealPage() {
    const meals = await getMeals();
    // console.log(meals);
    return <>
        <header className={classes.header}>
            <h1>
                Delicious meals , created <span className={classes.highlight}>by you</span>
            </h1>
            <p>Choose ypur favorite recipe and cook it yourself. It is easy and fun !</p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                    Share Your Favorite Recipe
                </Link>
            </p>
        </header>
        <main className={classes.main}>
            <MealGrid meals={meals} />
        </main>
    </>
}