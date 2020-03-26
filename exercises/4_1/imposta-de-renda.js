let salariobruto = 3000;
let inss;
let ir;

if(salariobruto <= 1556.94) {
    inss = salariobruto * 0.08;
} else if(salariobruto >= 1556.95 && salariobruto <= 2594.92) {
    inss = salariobruto * 0.09;
} else if(salariobruto >= 2594.93 && salariobruto <= 5189.82) {
    inss = salariobruto * 0.11;
} else (salariobruto > 5189.82) {
    inss = 570.88;
}

if(salariobruto <= 1903.98) {
    ir = 0;
} else if(salariobruto >= 1903.99 && salariobruto <= 2826.65) {
    ir = (salariobruto * 0.09) - 142.8;
} else if(salariobruto >= 2826.66 && salariobruto <= 3751.05) {
    ir = (salariobruto * 0.15) - 354.8;
} else if(salariobruto >= 3751.06 && salariobruto <= 4664.68) {
    ir = (salariobruto * 0.225) - 636.13;
} else {
    ir = (salariobruto * 0.275) - 869.36;
}