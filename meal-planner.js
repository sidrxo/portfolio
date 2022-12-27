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

function adjustMeal(meal, calorieGoal, proteinGoal) {
  // Clone the meal object to avoid modifying the original
  const adjustedMeal = { ...meal };
  // Calculate the total calories and protein for the meal
  let totalCalories = meal.ingredients.reduce((total, ingredient) => total + ingredient.calories, 0);
  let totalProtein = meal.ingredients.reduce((total, ingredient) => total + ingredient.protein, 0);
  // Calculate the difference between the total and the goals
  let calorieDiff = Math.abs(totalCalories - calorieGoal);
  let proteinDiff = Math.abs(totalProtein - proteinGoal);
  // Calculate the 5% tolerance for the goals
  const calorieTolerance = calorieGoal * 0.05; 
  
  function chooseMeal(caloriePerMeal, proteinPerMeal) {
    // Randomly select a meal from the meals array
    const meal = meals[Math.floor(Math.random() * meals.length)];
    // Adjust the meal to meet the calorie and protein goals within 5%
    const adjustedMeal = adjustMeal(meal, caloriePerMeal, proteinPerMeal);
    return adjustedMeal;
  }
  
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
      const mealName = (i === 0) ? "Breakfast" : (i === 1) ? "Lunch" : "Dinner";
      mealPlanHTML += `<div class="meal"><h2>${mealName} - ${meal.name}</h2>`;
      for (const ingredient of meal.ingredients) {
        mealPlanHTML += `<div class="ingredient">${ingredient.name} (${ingredient.weight}g) - ${ingredient.calories} calories, ${ingredient.protein}g protein</div>`;
      }
      mealPlanHTML += "</div>";
    }
    mealPlanDiv.innerHTML = mealPlanHTML;
  }); 
}