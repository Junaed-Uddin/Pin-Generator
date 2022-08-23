let count = 3;

function pinCode() {
    const pin = generateRandom();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else
        return pinCode();
}

function generateRandom() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pinNumber = pinCode();
    document.getElementById('display-pin').value = pinNumber;
});

const buttons = document.querySelectorAll('.button');

for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const typedNumber = document.getElementById('typed-numbers');
        const textValue = event.target.innerText;
        if (isNaN(textValue)) {
            if (textValue === 'C') {
                document.getElementById('typed-numbers').value = '';
            }
            else if (textValue === '<') {
                const deleteValue = typedNumber.value.split('');
                deleteValue.pop();
                const remainingValue = deleteValue.join('');
                typedNumber.value = remainingValue;
            }
        }
        else {
            typedNumber.value += event.target.innerText;
        }
    })
}

document.getElementById('verify-pin').addEventListener('click', function () {
    const pinValue = document.getElementById('display-pin').value;
    const typedValue = document.getElementById('typed-numbers').value;
    if (pinValue == '' || typedValue == '') {
        alert("You shouldn't generate the pin number");
        return;
    }
    else if (pinValue === typedValue) {
        document.getElementById('pin-success').style.display = 'block';
        document.getElementById('pin-failure').style.display = 'none';
        count = 3;
        document.getElementById('try').innerText = count;
        // document.getElementById('try-again').style.removeProperty('color');
        document.getElementById('typed-numbers').value = '';
        document.getElementById('display-pin').value = '';
    }
    else {
        document.getElementById('pin-failure').style.display = 'block';
        document.getElementById('pin-success').style.display = 'none';
        count--;
        document.getElementById('try').innerText = count;
        document.getElementById('typed-numbers').value = '';
        if (count == 0) {
            document.getElementById('typed-numbers').value = '';
            document.getElementById('display-pin').value = '';
            document.getElementById("calculator").classList.add('disable-div');
        }
    }
})