function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType; 
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var crustTypes = [
    "deep dish",
    "hand tossed",
    "thin and crispy",
    "cauliflower",
    "gluten free",
    "hawaiian bread"
]

var sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce",
    "nacho cheese",
    "tikka masala"
]

var cheeses = [
    "mozzarella",
    "cheddar",
    "feta",
    "swiss cheese",
    "blue cheese",
    "goat cheese",
    "provolone",
    "parmesan",
    "vegan cheese"
];

var toppings = [
    "pepperoni",
    "sausage",
    "chicken",
    "corn",
    "olives",
    "bell peppers",
    "onions",
    "mushrooms",
    "anchovies"
];

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustTypes);
    pizza.sauceType = randomPick(sauceTypes);
    pizza.cheese = [];
    for (var i=0; i<randomRange(4, 1); i++) {
        pizza.cheese.push(randomPick[cheeses]);
    }
    pizza.topping = [];
    for (var i=0; i<randomRange(4, 0); i++) {
        pizza.topping.push(randomPick[toppings]);
    }
    return pizza;
}

var pizza1 = pizzaOven(crustTypes[0], sauceTypes[0], [cheeses[0]], [toppings[0], toppings[1]]);
console.log(pizza1);

var pizza2 = pizzaOven(crustTypes[1], sauceTypes[1], [cheeses[0], cheeses[2]], [
    toppings[7], toppings[4], toppings[6]
]);
console.log(pizza2);

var pizza3 = pizzaOven(crustTypes[0], sauceTypes[1], [cheeses[0], cheeses[7]], [
    toppings[1], toppings[4], toppings[6]
]);
console.log(pizza3);

var pizza4 = pizzaOven(crustTypes[5], sauceTypes[5], [cheeses[6]], [toppings[2], toppings[7]]);
console.log(pizza4);

var random_pizza = randomPizza();
console.log(random_pizza);
