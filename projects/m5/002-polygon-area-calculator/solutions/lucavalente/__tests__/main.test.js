const Rectangle = require("../classes/rectangle");
const Square = require("../classes/square");

test("SetUp", () => {
    rect = new Rectangle(3, 6);
    sq = new Square(5);
});

test("Test Subclass", () => {
    rect = new Rectangle(3, 6)
    sq = new Square(5)
    
    actual = Square.prototype instanceof Rectangle;
    expected = true;

    expect(actual).toBe(expected, 'Expected Square class to be a subclass of the Rectangle class.');
});

test("Test square is square and rectangle", () => {  
    rect = new Rectangle(3, 6)
    sq = new Square(5)

    actual = sq instanceof Square && sq instanceof Rectangle;
    expected = true;
    expect(actual).toBe(expected, "Expected square object to be an instance of the Square class and the Rectangle class.");    
});

test("Square toString() method", () => {

    const rect = new Rectangle(3,6);
    const sq = new Square(5);

    actual = sq.toString();
    expected = "Square(side=5)";
    
    expect(actual).toBe(expected, 'Expected string representation of square to be "Square(side=5)"');
});

test("Rectangle picture", () => {

    const rect = new Rectangle(6,3);
    actual = rect.get_picture();
    expected = "* * * * * * \n" + "* * * * * * \n" + "* * * * * * \n";

    expect(actual).toBe(expected, 'Expected rectangle picture to be different.')
}) 