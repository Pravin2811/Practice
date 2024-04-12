class ColumnNumber {
    output: number = 0;
    length: number = 0;
    static maxInput: number;// = this.columnNumber("FXSHRXW");
    static {
        this.maxInput = this.columnNumber("FXSHRXW");
    }
    // constructor() {
    //     ColumnNumber.maxInput = ColumnNumber.maxInput;
    // }

    static columnNumber(input: string): number {
        let length = input.length;
        let output = 0;
        for (let i = 0; i < length; i++) {
            let value = input.charCodeAt(i);
            if (value >= 65 && value <= 90) {
                let result = value - 64;
                output = output * 26 + result;
            } else {
                return -1;
            }
        }
        return output;
    }
}

let output1 = new ColumnNumber();
console.log(ColumnNumber.columnNumber("ZY"));
console.log(ColumnNumber.columnNumber("ABC"));