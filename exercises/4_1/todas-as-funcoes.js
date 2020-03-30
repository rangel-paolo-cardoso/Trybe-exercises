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

//console.log(comparacao(13, 25));