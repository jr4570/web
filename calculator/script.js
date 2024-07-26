// script.js
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'C') {
                expression = '';
                display.value = expression;
            } else if (value === '=') {
                try {
                    expression = eval(expression.replace('^', '**'));
                    display.value = expression;
                } catch {
                    display.value = 'Error';
                }
            } else if (['sin', 'cos', 'tan', 'log', 'ln', 'sqrt'].includes(value)) {
                handleScientificFunctions(value);
            } else {
                expression += value;
                display.value = expression;
            }
        });
    });

    function handleScientificFunctions(func) {
        let result;
        try {
            let evaluatedExpr = eval(expression);
            switch (func) {
                case 'sin':
                    result = Math.sin(toRadians(evaluatedExpr));
                    break;
                case 'cos':
                    result = Math.cos(toRadians(evaluatedExpr));
                    break;
                case 'tan':
                    result = Math.tan(toRadians(evaluatedExpr));
                    break;
                case 'log':
                    result = Math.log10(evaluatedExpr);
                    break;
                case 'ln':
                    result = Math.log(evaluatedExpr);
                    break;
                case 'sqrt':
                    result = Math.sqrt(evaluatedExpr);
                    break;
            }
            expression = result.toString();
            display.value = expression;
        } catch {
            display.value = 'Error';
        }
    }

    function toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
});
