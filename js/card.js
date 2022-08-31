function getTextElement(elementId){
    const textElement = document.getElementById(elementId);
    const text= textElement.innerText;
    return text;
}

function getTextValue(elementId){
    const textElement = document.getElementById(elementId);
    const textString = textElement.innerText;
    const text = parseFloat(textString);
    return text;
}

function addTextElement(elementId, newPrice) {
    const getTextElement = document.getElementById(elementId);
    getTextElement.innerText = newPrice;
}


function cartDetails(btnId, nameId, priceId, extraId) {
    document.getElementById(btnId).addEventListener('click', function(){
        const productName = getTextElement(nameId);
        const productPrice = getTextValue(priceId);
        const extraAmount = getTextValue (extraId);
        const taxAmount = productPrice*15/100;
        const totalAmount = productPrice + taxAmount + extraAmount;
        addTextElement('name', productName);
        addTextElement('price', productPrice);
        addTextElement('tax', taxAmount);
        addTextElement('total', totalAmount);
        addTextElement('extra-fee', extraAmount);
    })  
}
cartDetails("run60-btn", "run60-name", "run60-price", "run60-extra");
cartDetails("grand-btn", "grand-name", "grand-price", "grand-extra");
cartDetails("run20-btn", "run20-name", "run20-price", "run20-extra");
cartDetails("postmove-btn", "postmove-name", "postmove-price", "postmove-extra");
cartDetails("nmd-btn", "nmd-name", "nmd-price", "nmd-extra");
cartDetails("kakari-btn", "kakari-name", "kakari-price", "kakari-extra");