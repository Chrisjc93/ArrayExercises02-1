let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

//a) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.
cargoHold.splice(cargoHold.indexOf("slinky"), 1, "space tether"); //Start at index where slinky is located, replace 1 entries with space tether.
console.log(cargoHold);

// could of also just done cargoHold[5] = 'space tether';

//b) Remove the last item from the array with pop. Print the element removed and the updated array.
cargoHold.pop();
console.log(cargoHold);

//c) Remove the first item from the array with shift. Print the element removed and the updated array.
cargoHold.shift();
console.log(cargoHold);


//d) Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and ‘20 meters’ to the the array - the number at the start and the string at the end. Print the updated array to confirm the changes.
cargoHold.unshift(1138);
console.log(cargoHold);
cargoHold.push("20 meters");
console.log(cargoHold);;


//e) Use a template literal to print the final array and its length.
console.log(` this is the final array: ${cargoHold}, and its length is: ${cargoHold.length}`)

// Status check, rookie. Which array methods ADD items, and where are the new entries placed? Which methods REMOVE items, and where do the entries come from? Which methods require entries inside the ``()``?

// push adds an item to the end, splice adds an item where you choose, unshift adds an item to the start.

// pop removes the last element of an array, shift removes the first element from an array, splice can remove where you choose.

// push, splice, unshift all require arguments inside ()

