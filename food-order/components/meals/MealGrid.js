import classes from './MealGrid.module.css'
import MealItem from './MealItem'
export default function MealGrid({meals}){
    return <ul className={classes.meals}>
        {meals.map(meal => (
            <li key={meal.id}>
                <MealItem {...meal}/>
            </li>
        ))}
    </ul>
}