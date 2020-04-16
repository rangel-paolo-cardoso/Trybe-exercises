const form = document.forms['formuser'];
const msg = document.querySelector('.data-error');
const btnEnviar = document.getElementById('btEnviar');
const cData = document.getElementById('cData');
const resultado = document.querySelector('.resultado');
let formState = true;
const objEstados = {
    'ac': 'Acre',
    'al': 'Alagoas',
    'ap': 'Amapá',
    'am':'Amazonas',
    'ba': 'Bahia',
    'ce': 'Ceará',
    'df': 'Distrito Federal',
    'es': 'Espírito Santo',
    'go': 'Goiás',
    'ma': 'Maranhão',
    'mt': 'Mato Grosso',
    'ms': 'Mato Grosso do Sul',
    'mg': 'Minas Gerais',
    'pa': 'Pará',
    'pb': 'Paraíba',
    'pr': 'Paraná',
    'pe': 'Pernambuco',
    'pi': 'Piauí',
    'rj': 'Rio de Janeiro',
    'rn': 'Rio Grande do Norte',
    'rs': 'Rio Grande do Sul',
    'ro': 'Rondônia',
    'rr': 'Roraima',
    'sc': 'Santa Catarina',
    'sp': 'São Paulo',
    'se': 'Sergipe',
    'to': 'Tocantins',
};

function setEstado() {
    const estados = document.getElementById('cEst');
    for (estado in objEstados) {
        const option = document.createElement('option');
        option.value = estado;
        option.innerText = objEstados[estado];
        estados.appendChild(option);
    }
}

function validaDia(dia) {
    return dia > 0 && dia <= 31;
}

function validaMes(mes) {
    return mes > 0 && mes <= 12;
}

function validaAno(ano) {
    return ano > 0;
}

function mensagemDeErro() {
    msg.innerText = 'Data inválida! Digite a data corretamente.'
}

function verificaData() {
    const data = form.dataInic.value.split('/')
    const dia = validaDia(Number.parseInt(data[0], 10));
    const mes = validaMes(Number.parseInt(data[1], 10));
    const ano = validaAno(Number.parseInt(data[2], 10));
    alert(dia && mes && ano);
    return dia && mes && ano;
}

function recuperaData() {
    const data = form.dataInic.value.indexOf('/');
    const result = verificaData();
    if (data === -1 || !result) {
        mensagemDeErro();
    } else {
        msg.innerText = '';
        return true;
    }
}

function configuraResultado() {
    if (formState) {
        const dados = document.querySelectorAll('input');
        const estado = form.estado.value;
        const resumo = form.resumo.value;
        for (let i = 0; i < dados.length; i += 1) {
            const p = document.createElement('p');
            p.innerHTML = dados[i].value;
            resultado.appendChild(p);
        }
        resultado.style.display = 'block';
        formState = false;
    }
}

function validaForm(event) {
    const valido = recuperaData();
    if (valido) {
        configuraResultado();
    }
}

window.onload = function () {
    setEstado();
    btnEnviar.addEventListener('click', validaForm);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
};