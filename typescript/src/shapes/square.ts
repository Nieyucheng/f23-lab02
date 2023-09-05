import { Rectangle } from "./rectangle"

class square extends Rectangle {
    constructor(sideLen: number) {
        super(sideLen, sideLen)
    }
}

export { square }