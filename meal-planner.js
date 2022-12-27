const form = document.getElementById("meal-plan-form");
const calorieGoalInput = document.getElementById("calorie-goal");
const proteinGoalInput = document.getElementById("protein-goal");
const numberOfMealsInput = document.getElementById("number-of-meals");
const mealPlanDiv = document.getElementById("meal-plan");

const ingredients = [
  { name: "chicken", protein: 26, calories: 165, weight: 100 },
  { name: "beef", protein: 28, calories: 239, weight: 100 },
  { name: "tofu", protein: 20, calories: 76, weight: 100 },
  { name: "rice", protein: 5, calories: 205, weight: 100 },
  { name: "pasta", protein: 8, calories: 221, weight: 100 },
  { name: "broccoli", protein: 2.8, calories: 55, weight: 100 },
  { name: "spinach", protein: 2.9, calories: 23, weight: 100 },
  { name: "sweet potato", protein: 2, calories: 103, weight: 100 },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const calorieGoal = calorieGoalInput.value;
  const proteinGoal = proteinGoalInput.value;
  const numberOfMeals = numberOfMealsInput.value;

  const caloriePerMeal = calorieGoal / numberOfMeals;
  const proteinPerMeal = proteinGoal / numberOfMeals;

  let mealPlanHTML = "";
  for (let i = 0; i < numberOfMeals; i++) {
    mealPlanHTML += `<div class="meal"><h2>Meal ${i + 1}</h2>`;
    let remainingCalories = caloriePerMeal;
    let remainingProtein = proteinPerMeal;
    let remainingWeight = 1000; // 2000 grams is a rough estimate of the maximum weight of a meal
    const mealIngredients = {};
    while (remainingCalories > 0 && remainingProtein > 0 && remainingWeight > 0) {
      const ingredient = chooseIngredient(remainingCalories, remainingProtein, remainingWeight);
      if (!ingredient) {
        break;
      }
      remainingCalories -= ingredient.calories;
      remainingProtein -= ingredient.protein;
      remainingWeight -= ingredient.weight;
      if (!mealIngredients[ingredient.name]) {
        mealIngredients[ingredient.name] = {
          weight: ingredient.weight,
          calories: ingredient.calories,
          protein: ingredient.protein,
        };
      } else {
        mealIngredients[ingredient.name].weight += ingredient.weight;
        mealIngredients[ingredient.name].calories += ingredient.calories;
        mealIngredients[ingredient.name].protein += ingredient.protein;
      }
    }
    for (const ingredientName in mealIngredients) {
      const ingredient = mealIngredients[ingredientName];
      mealPlanHTML += `<div class="ingredient">${ingredientName} (${ingredient.weight}g) - ${ingredient.calories} calories, ${ingredient.protein}g protein</div>`;
    }
    mealPlanHTML += "</div>";
  }
  mealPlanDiv.innerHTML = mealPlanHTML;
});

function chooseIngredient(remainingCalories, remainingProtein, remainingWeight) {
  const choices = ingredients.filter(
    (ingredient) =>
      ingredient.calories <= remainingCalories && ingredient.protein <= remainingProtein && ingredient.weight <= remainingWeight
  );
  if (choices.length === 0) {
    return null;
  }
  return choices[Math.floor(Math.random() * choices.length)];
}
