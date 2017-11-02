var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...

var numberOfHoverboards = "1"
console.log(`There are at least ${numberOfHoverboards} hoverboards in 2015`)
numberOfHoverboards = parseInt(numberOfHoverboards)
numberOfHoverboards -= 1
console.log(`There are at least ${numberOfHoverboards} hoverboards in 2015`)

var hoverboards = 0
if (hoverboards >= 100) {
  console.log(`The future rocks!`)
} else if (hoverboards < 100 and hoverboards > 1) {
  console.log('The future is pretty cool')
} else if (hoverboards === 1) {
  console.log(`Meh`)
} else {
  console.log(`The future is boring`)
}
