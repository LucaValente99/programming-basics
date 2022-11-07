const Rectangle = require("./classes/rectangle");
const Square = require("./classes/square");

/** Creating and testing 2 objects, one of each written class*/

// RECTANGLE class
rect = new Rectangle(5, 10);
console.log(rect.get_area());
rect.set_height(3);
console.log(rect.get_perimeter());
console.log(rect.toString());
console.log("\n" + rect.get_picture());

// SQUARE class
sq = new Square(9);
console.log(sq.get_area());
sq.set_side(4);
console.log(sq.get_diagonal());
console.log(sq.toString());
console.log("\n" + sq.get_picture());


