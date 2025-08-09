let display = document.querySelector('input');
let result = '';

// Handle button clicks
document.querySelectorAll('.keys').forEach(btn => {
    btn.addEventListener('click', () => handleInput(btn.textContent));
});

// Handle keyboard
document.addEventListener('keydown', e => {
    if (e.key >= '0' && e.key <= '9') handleInput(e.key);
    if (['+', '-', '*', '/', '%', '.'].includes(e.key)) handleInput(e.key);
    if (e.key === 'Enter') handleInput('=');
    if (e.key === 'Escape') handleInput('AC');
    if (e.key === 'Backspace') handleInput('DEL');
});

function handleInput(input) {
    if (input === 'AC') {
        result = '';
        display.value = '0';
    }
    else if (input === 'DEL') {
        result = result.slice(0, -1);
        display.value = result || '0';
    }
    else if (input === '=') {
        try {
            result = eval(result).toString();
            display.value = result;
        } catch {
            display.value = 'Error';
            result = '';
        }
    }
    else {
        if (display.value === '0' && input >= '0' && input <= '9') {
            result = input;
        } else {
            result += input;
        }
        display.value = result;
    }
}