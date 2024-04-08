//Function Overloading
function payment(paymentMode: number): boolean;
function payment(paymentMode: string): boolean;
function payment(paymentMode: string | number): boolean{
    if(typeof paymentMode === 'string'){
        return true;
    }else if (typeof paymentMode === 'number'){
        return true;
    }

    return false;
}

console.log(payment('upi'))


//Shopping cart
function addItems(itemName: string): string;
function addItems(itemName: string, quantity: number): string;
function addItems(itemName: string, quantity?: number): string{
    if(quantity){
        return `${itemName} ${quantity}`;
    }

    return `${itemName}`;
}

console.log(addItems("Choco", 5))


function addItems1(itemName: string): string;
function addItems1(itemName: string, quantity: number): string;
function addItems1(itemName: string, quantity?: number, quantity2?: number): string{
    if(quantity && quantity2) return `${itemName} ${quantity}`;
    if(quantity){
        return `${itemName} ${quantity}`;
    }

    return `${itemName}`;
}

console.log(addItems1("Parle", 5));