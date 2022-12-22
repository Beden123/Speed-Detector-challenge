//Getting html elements by Id
const form = document.getElementById("speedDetector");
const input = document.getElementById("speed");
const button = document.getElementById("findSpeed");

form.addEventListener("submit", (event) => {
  //Add event on submit
  event.preventDefault(); //prevents reloading
  checkSpeed(speed);
});

function checkSpeed(speed) {
  console.log(speed);
  console.log(speed.value);
  const checkSpeed = speed.value;

  //If speed is equal to or less than 70: "OK"
  //For every 5km/s above speed limit(50): 1 point
  //12 points: "License suspended"

  let points;
  points = (checkSpeed - 70) / 5;

  if (checkSpeed <= 70) {
    return (message.textContent = "OK");
  } else if (checkSpeed > 70 && checkSpeed < 130) {
    return points;
  } else if (points >= 12) {
    return (message.textContent = "License suspended");
  }
}
