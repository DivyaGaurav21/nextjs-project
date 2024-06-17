export default function MealDetailPage({params}) {

  return (
    <h1>
      Meal Detail
      <p>{params.mealSlug}</p>
    </h1>
  );
}