class ExcelColumnConverter {
    private finalCount: number = 0;
    private inputStr: string;

    constructor(givenStr: string) {
        this.inputStr = givenStr;
    }

    private findTitleCount(): void {
        for (let val of this.inputStr) {
            this.finalCount *= 26;
            this.finalCount += val.charCodeAt(0) - "A".charCodeAt(0) + 1;
        }
        //this.finalCount = this.finalCount;
    }

    convertToNumber(): void {
        if (this.inputStr === this.inputStr.toUpperCase()) {
            if (this.inputStr.length >= 1 && this.inputStr.length < 7) {
                this.findTitleCount();
            } else if (this.inputStr.length === 7 && this.inputStr <= 'FXSHRXW') {
                this.findTitleCount();
            } else {
                //throw new Error("Word length or word out of range");
                
                console.log("Word length or word out of range");
            }
        } else {
            console.log("Enter uppercase");
        }
    }

    public get getCount(){
        return this.finalCount;
    }
}


const converter = new ExcelColumnConverter('ASD');
converter.convertToNumber();
console.log(converter.getCount);