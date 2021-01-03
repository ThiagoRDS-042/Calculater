const dividir = (a, b) => a / b;
const multiplicar = (a, b) => a * b;
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;

const botoes = document.querySelectorAll('button');
const text = document.querySelector('input');

let v1 = '';
let v2 = '';
let operacao = '';
let resultado = '';

function clearData() {
    text.value = '';
    v1 = '';
    v2 = '';
    operacao = '';
    resultado = '';
}

function calc(num) {
    if (operacao !== '' && v2 === '' && v1 === '') {
        text.value = num;
        v1 = resultado;
        v2 = num;
    } else if (operacao === '') {
        v1 += num;
        text.value = v1;
    } else {
        v2 += num;
        text.value = v2;
    }
}

function coditional() {
    switch (operacao) {
        case '+':
            resultado = Number(v1) + Number(v2);
            break;
        case '-':
            resultado = Number(v1) - Number(v2);
            break;
        case '÷':
            if (Number(v2) === 0) {
                alert('Não existe divisão por 0(zero)!');
                clearData();
            } else {
                resultado = Number(v1) / Number(v2);
            }
            break;
        case 'x':
            resultado = Number(v1) * Number(v2);
            break;
        case '%':
            resultado = (Number(v1) * Number(v2)) / 100;
            break;
        default:
            alert('Error');
            v1 = '';
            v2 = '';
            resultado = '';
            operacao = '';
    }
}

function buttonOperation(op) {
    if (v1 === '') {
        alert('Digite um número antes de qualquer operação!');
    } else if (v2 === '') {
        operacao = op;
        text.value = '';
    } else if (operacao !== '' && v2 !== '' && v1 !== '') {
        coditional();
        v1 = resultado;
        text.value = v1;

        operacao = op;
        coditional();
        resultado = '';
        v2 = '';
    }
}

function result() {
    if (v1 === '') {
        alert('Digite um número antes de qualquer operação!');
    } else if (v2 === '') {
        alert('Digite os números antes de qualquer operação!');
    } else {
        coditional();
        v1 = resultado;
        text.value = v1;
        resultado = '';
        v2 = '';
        operacao = '';
    }
}

//botao 9
botoes[5].onclick = function() {
    calc('9');
};

//botao 8
botoes[4].onclick = function() {
    calc('8');
};

//botao 7
botoes[3].onclick = function() {
    calc('7');
};

//botao 6
botoes[9].onclick = function() {
    calc('6');
};

//botao 5
botoes[8].onclick = function() {
    calc('5');
};

//botao 4
botoes[7].onclick = function() {
    calc('4');
};
//botao 3
botoes[13].onclick = function() {
    calc('3');
};

//botao 2
botoes[12].onclick = function() {
    calc('2');
};

//botao 1
botoes[11].onclick = function() {
    calc('1');
};

//botao 0
botoes[15].onclick = function() {
    calc('0');
};

//botao .(ponto)
botoes[16].onclick = function() {
    text.value.indexOf('.') === -1 ? text.value === '' ? calc('0.') : calc('.') : alert('Não e possível inserir mais de um ponto!');

};

//Botoes de operações

//botao limpar
botoes[0].onclick = clearData;

//botao √
botoes[1].onclick = function() {
    if (v1 === '') {
        alert('Digite um número antes de qualquer operação!');
    } else {
        resultado = Math.sqrt(Number(v1));
        text.value = resultado;
        v1 = resultado;
        resultado = '';
    }
}

//botao %
botoes[2].onclick = function() {
    buttonOperation('%');
}

//botao ÷
botoes[6].onclick = function() {
    buttonOperation('÷');
};

//botao x
botoes[10].onclick = function() {
    buttonOperation('x');
};

//botao -
botoes[14].onclick = function() {
    buttonOperation('-');
};

//botao +
botoes[18].onclick = function() {
    buttonOperation('+');
};

//botao =
botoes[17].onclick = result;