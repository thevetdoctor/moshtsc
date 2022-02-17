export class Point {
    // private x: number;
    // x: number;
    // y: number;
    constructor(private x?: number, private y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }

    getDiostance(anotherPoint: Point) {
        //...
    }

    getX() {
        return this.x;
    }

    setX(value) {
        try {
            if(value < 5) {
                throw new Error("Value must be higher than 5");
                this.x = value;
            }
        
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }
}
