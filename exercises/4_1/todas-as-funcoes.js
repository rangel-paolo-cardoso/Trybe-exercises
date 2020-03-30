function adicao(a, b) {
    return `O resultado de ${a} + ${b} = ${a + b}`;
}

function subtracao(a, b) {
    return `O resultado de ${a} - ${b} = ${a - b}`;
}

function adicao(a, b) {
    return `O resultado de ${a} * ${b} = ${a * b}`;
}

function adicao(a, b) {
    return `O resultado de ${a} / ${b} = ${a / b}`;
}

function angulosDoTriangulo(ang1, ang2, ang3) {
    let result = false;
    if(ang1 + ang2 + ang3 === 180){
        result = true;
    }
    return `Os ângulos representam os ângulo internos de um triângulo? ${result}`;
}

function calculoImposto(custoProd, valorVenda) {
    if(custoProd > 0 && valorVenda > 0) {
        lucro = (valorVenda - custoProd * 0.8) * 1000;
        return `O lucro da empresa foi de ${lucro}`;
    } else {
        return 'Erro!';
    }
}

function comparacao(num1, num2) {
    if(num1 > num2) {
        return `Entre ${num1} e ${num2} o maior número é ${num1}`;
    } else {
        return `Entre ${num1} e ${num2} o maior número é ${num2}`;
    }
}

function imparDeTres(num1, num2, num3) {
    if(num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
        return `Entre ${num1}, ${num2} e ${num3} existe um ímpar.`;
    } else {
        return `Não há impares entre ${num1}, ${num2}e ${num3}.`;;
    }
}

//console.log(imparDeTres(12, 23, 22));