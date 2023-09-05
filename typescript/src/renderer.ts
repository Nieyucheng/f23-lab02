import { Rectangle } from "./shapes/rectangle.js";

function newRenderer(someShape: Shape) {
    return {
        draw() {
            const area: number = someShape.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { newRenderer }