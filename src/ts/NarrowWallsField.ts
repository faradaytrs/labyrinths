interface Borders {
    horizontal: number[][],
    vertical: number[][]
}
export class NarrowWallsField {
    private width: number;
    private height: number;
    borders: Borders
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.borders.horizontal = [
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1]
        ];
        this.borders.vertical = [
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1]
        ];
    }
    toThickWallsField() {
        const width = this.width*2 +1;
        const height = this.height*2 +1;
        
    }
}
