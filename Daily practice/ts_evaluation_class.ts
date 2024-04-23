class ColumnNumber {
    //output: number = 0;
    //private length: number = 0;
    static maxInput: number = 0;// = this.columnNumber("FXSHRXW");
    static {
        //console.log("Hello")
        //ColumnNumber.maxInput = this.columnNumber("FXSHRXW");
        ColumnNumber.maxInput = this.columnNumber("FXSHRXW");
    }

    static columnNumber(input: string): number {
        let length = input.length;
        let output = 0;
        const valueOfA = "A".charCodeAt(0);
        //const valueOfZ = valueOfA + 25;//"Z".charCodeAt(0);
        for (let i = 0; i < length; i++) {
            let value = input.charCodeAt(i);
            if (value >= valueOfA && value <= valueOfA + 25) {
                let result = value - valueOfA + 1;
                output = output * 26 + result;
            } else {
                return -1;
            }
        }
        return output;
    }
}

//let output1 = new ColumnNumber();
//console.log(ColumnNumber.columnNumber("ZZ"));
console.log(ColumnNumber.columnNumber("ASDEFV"));
//console.log(ColumnNumber.columnNumber("ADCFg"));