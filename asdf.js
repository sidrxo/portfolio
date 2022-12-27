let mealPlanHTML = "";
const mealNames = ["Breakfast", "Lunch", "Dinner"];
for (let i = 0; i < numberOfMeals; i++) {
  const meal = chooseMeal(caloriePerMeal, proteinPerMeal);
  if (!meal) {
    break;
  }
  mealPlanHTML += `<div class="meal"><h2>${mealNames[i]} - ${meal.name}</h2>`;
  for (const ingredient of meal.ingredients) {
    mealPlanHTML += `<div class="ingredient">${ingredient.name} (${ingredient.weight}g) - ${ingredient.calories} calories, ${ingredient.protein}g protein</div>`;
  }
  mealPlanHTML += "</div>";
  if (numberOfMeals === 4 && i === 0) {
    mealPlanHTML += `<div class="meal"><h2>Snack</h2><div class="ingredient">
