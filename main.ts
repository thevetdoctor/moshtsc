import { Point } from "./point";

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'blue'];
let colorz: string = 'blue' || 'red' || 'green';

const blue = 1;
const red = 2;
const green = 3;

enum Colors { blue = 0, red = 1, green = 2 };
let backgroundColor = Colors.blue;

// let message;
// let message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
// console.log(endsWithC, alternativeWay);

interface IPoint {
    x: number,
    y: number
}


let point = new Point(1, 3);
let xValue = point.getX();
point.setX(4);
point.draw();