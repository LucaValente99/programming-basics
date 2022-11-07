const Rectangle = require("./rectangle");

/**
 * A Class to build squares
 * @implements {Rectangle} 
 */
class Square extends Rectangle {

    /**
     * @param {int} side of the square
     */
    constructor(side){
        super(side, side);
    }

    /**
     * Used to set square height
     * @param {int} side  
     */
    set_height(side){
        this.width = side;
        this.height = side;
    }

    /**
     * Used to set square width
     * @param {int} side  
     */
    set_width(side){
        this.width = side;
        this.height = side;
    }

    /**
     * Used to set square side
     * @param {int} side  
     */
    set_side(side){
        this.width = side;
        this.height = side;    
    }

    /**
     * Return formatted string rappresenting the Rectangle
     * @returns {string}
     */
    toString(){
        return 'Square(side=' + this.width + ')';
    }

}

module.exports = Square;