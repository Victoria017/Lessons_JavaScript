
/*
Завдання 1
За допомогою методів setTimeout() або setInterval() виведіть у тіло документа методом 
document.write() перший рядок з монологу Гамлета 'To be, or not to be, that is the
question...' так, щоб букви з'являлися по одній через 200-300 мілісекунд, а потім із 
нового рядка, також методом document.write(), потрібно вивести 'William Shakespeare,
from «Hamlet»'.
*/
let textGamlet = "To be, or not to be, that is the question..."

function displayBySymbol(text) {
    for(let i = 0; i < text.length; i++) {
        setTimeout(function() {
            document.write(`${text[i]}`);
        }, 300 * i);
    }
}

displayBySymbol(textGamlet);

setTimeout(function() {
    document.write('<br>');
    displayBySymbol('William Shakespeare, from «Hamlet»');
}, 300 * textGamlet.length);


