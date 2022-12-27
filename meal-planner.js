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
      // Select a random meal from the meals array
      const meal = meals[Math.floor(Math.random() * meals.length)];
  
      // Calculate the total calories and total protein of the meal
      const totalCalories = meal.ingredients.reduce((total, ingredient) => total + ingredient.calories, 0);
      const totalProtein = meal.ingredients.reduce((total, ingredient) => total + ingredient.protein, 0);
  
      // Calculate the difference between the total calories and the calorie goal per meal, and the difference between the total protein and the protein goal per meal
      const calorieDifference = totalCalories - caloriePerMeal;
      const proteinDifference = totalProtein - proteinPerMeal;
  
      // Adjust the ingredient weights to meet the calorie and protein goals within 5 either way
      if (calorieDifference > 5 || proteinDifference > 5) {
        const calorieRatio = caloriePerMeal / totalCalories;
        const proteinRatio = proteinPerMeal / totalProtein;
  
        for (const ingredient of meal.ingredients) {
          ingredient.weight *= calorieRatio * proteinRatio;
        }
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