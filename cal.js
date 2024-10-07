const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === '=') {
            try {
                expression = eval(expression);
                display.value = expression;
            } catch (error) {
                display.value = 'Error';
                expression = '';
            }
        } else if (value === 'AC') {
            expression = '';
            display.value = 0;
        } else if (value === 'DEL') {
            expression = expression.slice(0, -1);
            display.value = expression || 0;
        } else {
            expression += value;
            display.value = expression;
        }
    });
});