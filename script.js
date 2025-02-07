const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');
const timer = document.getElementById('timer');

// Interactive buttons
yesBtn.addEventListener('click', () => {
  window.location.href = "itinerary.html"; // Redirect to itinerary page
});

noBtn.addEventListener('mouseover', () => {
  // Move the "No" button randomly
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Countdown timer
const valentinesDay = new Date("February 14, 2025 00:00:00").getTime();

const updateTimer = () => {
  const now = new Date().getTime();
  const distance = valentinesDay - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(interval);
    timer.innerHTML = "Happy Valentine's Day! 💖";
  }
};

const interval = setInterval(updateTimer, 1000);
updateTimer();
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
  // Get selected meal option
  const meal = document.querySelector('input[name="meal"]:checked');
  const selectedMeal = meal ? meal.value : "Not selected";

  // Get selected dessert option
  const dessert = document.querySelector('input[name="dessert"]:checked');
  const selectedDessert = dessert ? dessert.value : "Not selected";

  // Get selected activities
  const activities = document.querySelectorAll('input[name="activity"]:checked');
  const selectedActivities = [];
  activities.forEach(activity => selectedActivities.push(activity.value));

  // Display the selected options
  alert(`
    You selected:
    - Meal: ${selectedMeal}
    - Dessert: ${selectedDessert}
    - Activities: ${selectedActivities.join(", ") || "None"}
  `);
});