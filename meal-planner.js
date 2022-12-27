const form = document.getElementById("meal-plan-form");
const calorieGoalInput = document.getElementById("calorie-goal");
const proteinGoalInput = document.getElementById("protein-goal");
const numberOfMealsInput = document.getElementById("number-of-meals");
const mealPlanDiv = document.getElementById("meal-plan");

const meals = [
  {
    name: "Chicken and Rice",
    ingredients: [
      { name: "chicken", weight: 100, protein: 26, calories: 165 },
      { name: "rice", weight: 200, protein: 5, calories: 205 },
    ],
  },
  {
    name: "Beef and Pasta",
    ingredients: [
      { name: "beef", weight: 100, protein: 28, calories: 239 },
      { name: "pasta", weight: 200, protein: 8, calories: 221 },
    ],
  },
  {
    name: "Tofu and Vegetables",
    ingredients: [
      { name: "tofu", weight: 100, protein: 20, calories: 76 },
      { name: "broccoli", weight: 100, protein: 2.8, calories: 55 },
      { name: "spinach", weight: 100, protein: 2.9, calories: 23 },
    ],
  },
  {
    name: "Salmon and Sweet Potato",
    ingredients: [
      { name: "salmon", weight: 100, protein: 22, calories: 208 },
      { name: "sweet potato", weight: 200, protein: 2, calories: 103 },
    ],
  },
  {
    name: "Turkey and Quinoa",
    ingredients: [
      { name: "turkey", weight: 100, protein: 31, calories: 172 },
      { name: "quinoa", weight: 200, protein: 8, calories: 222 },
    ],
  },
  {
    name: "Pork and Greens",
    ingredients: [
      { name: "pork", weight: 100, protein: 29, calories: 212 },
      { name: "kale", weight: 100, protein: 2.5, calories: 33 },
      { name: "arugula", weight: 100, protein: 1.5, calories: 25 },
    ],
  },
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
    const meal = chooseMeal(caloriePerMeal, proteinPerMeal);
    if (!meal) {
      break;
    }
    mealPlanHTML += `<div class="meal"><h2>Meal ${i + 1} - ${meal.name}</h2>`;
    for (const ingredient of meal.ingredients) {
      mealPlanHTML += `<div class="ingredient">${ingredient.name} (${ingredient.weight}g) - ${ingredient.calories} calories, ${ingredient.protein}g protein</div>`;
    }
    mealPlanHTML += "</div>";
  }
  mealPlanDiv.innerHTML = mealPlanHTML;
});

function chooseMeal(caloriePerMeal, proteinPerMeal) {
  const choices = meals.filter(
    (meal) => meal.ingredients.reduce((totalCalories, ingredient) => totalCalories + ingredient.calories, 0) <= caloriePerMeal
      && meal.ingredients.reduce((totalProtein, ingredient) => totalProtein + ingredient.protein, 0) <= proteinPerMeal
  );
  if (choices.length === 0) {
    return null;
  }
  return choices[Math.floor(Math.random()
    * choices.length)];
  }
