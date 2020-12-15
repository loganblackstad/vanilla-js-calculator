const durationOption = document.getElementById("dur");
const durationInput = document.getElementById("dur-input");
const inputs = document.querySelectorAll('.radiogroup');


// A simple function to handle the click event for each input.
// this click handler changes the Duration Input Field to match the radio button selection
const clickHandler = i => {
  durationOption.textContent = i.getAttribute("data-value");
  console.log(i.getAttribute("max"))
  durationInput.setAttribute("max", i.getAttribute("max"));
};

// Possibly even less code again. 
inputs.forEach(i => i.onclick = () => clickHandler(i));


// handle button click for "Get A Quote"
document.getElementById("form1").addEventListener('submit', getQuote);

function calculateQuote(quantity, vehichle, duration) {
  let quote = quantity * charterup_dict[duration][vehichle];
  return '$' + quote.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

function getQuote(event) {
  var formData = new FormData(document.getElementById("form1"));
  let quantity = formData.get('quantity');
  let vehichle = formData.get('vehicle-type');
  let duration = formData.get('duration');

  event.preventDefault();
  document.getElementById("quote").innerHTML = calculateQuote(quantity, vehichle, duration);
  return false;

}


let charterup_dict =
{
  'daily': { 'charter_bus': 1000, 'mini_bus': 925, 'sprinter': 850, 'party_bus': 775, 'sedan': 700, 'suv': 625, 'limousine': 550, 'trolley': 475 },
  'hourly': { 'charter_bus': 400, 'mini_bus': 360, 'sprinter': 320, 'party_bus': 280, 'sedan': 240, 'suv': 200, 'limousine': 160, 'trolley': 120 },
  'distance': { 'charter_bus': 3.50, 'mini_bus': 3.25, 'sprinter': 3, 'party_bus': 2.75, 'sedan': 2.50, 'suv': 2.25, 'limousine': 2, 'trolley': 1.75 }
}
