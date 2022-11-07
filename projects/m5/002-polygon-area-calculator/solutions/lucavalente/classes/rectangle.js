/**
 * A Class to build rectangles
 */
class Rectangle{

    /**
    * @param {int} width widht of rectangle
    * @param {int} height height of rectangle
    */
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    /**
     * Used to set rectangle width
     * @param {int} width  
     */
    set_width(width){
        this.width = width;
    }
    
    /**
     * Used to set rectangle height 
     * @param {int} height 
     */
    set_height(height){
        this.height = height;
    }

    /**
     * Return rectangle area
     * @returns {int}
     */
    get_area(){
        return this.width * this.height;
    }
    
    /**
     * Return rectangle perimeter
     * @returns {int}
     */
    get_perimeter(){
        return this.width*2 + this.height*2;
    }

    /**
     * Return rectangle diagonal
     * @returns {int/float}
     */
    get_diagonal(){
        return Math.sqrt( Math.pow(this.width, 2) + Math.pow(this.height, 2));
    }

    /**
     * @returns {string} a picture of the rectangle based on sizes
     */
    get_picture(){

        if (this.width > 50 || this.height > 50){
            return "Too big for picture";
        }

        let picture = "";

        for(let i = 0; i < this.height; i++){
            for (let j = 0; j < this.width; j++){
                picture += "* ";
            }
            picture += "\n";
        }

        return picture;
    }

    /**
     * Returns the number of times the passed in shape could fit inside the shape
     * @param {Rectangle} shape 
     * @returns {int} 
     */
    get_amount_inside(shape){

        width = Math.floor(shape.width / this.width);
        height = Math.floor(shape.height / this.height);
        
        return width * height;
    }

    /**
     * Return formatted string rappresenting the Rectangle
     * @returns {string}
     */
    toString(){
        return 'Rectangle(width=' + this.width + ',' + ' height=' + this.height + ')';
    }

}

module.exports = Rectangle;