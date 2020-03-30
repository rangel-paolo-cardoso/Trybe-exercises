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

function impostoDeRenda(salBruto) {
    let salarioBase;
    let salarioLiquido;
    let inss;
    let ir;

    if(salBruto <= 1556.94) {
        inss = salBruto * 0.08;
    } else if(salBruto >= 1556.95 && salBruto <= 2594.92) {
        inss = salBruto * 0.09;
    } else if(salBruto >= 2594.93 && salBruto <= 5189.82) {
        inss = salBruto * 0.11;
    } else  {
        inss = 570.88;
    }

    salarioBase = salBruto - inss;

    if(salarioBase <= 1903.98) {
        ir = 0;
    } else if(salarioBase >= 1903.99 && salarioBase <= 2826.65) {
        ir = (salarioBase * 0.075) - 142.8;
    } else if(salarioBase >= 2826.66 && salarioBase <= 3751.05) {
        ir = (salarioBase * 0.15) - 354.8;
    } else if(salarioBase >= 3751.06 && salarioBase <= 4664.68) {
        ir = (salarioBase * 0.225) - 636.13;
    } else {
        ir = (salarioBase * 0.275) - 869.36;
    }

    salarioLiquido = salarioBase - ir;
    return `Salário líquido é de R$ ${salarioLiquido}.`
}

console.log(impostoDeRenda(3000));