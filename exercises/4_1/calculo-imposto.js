let custoProduto = 10;
let valorVenda = 13;
let lucro;
if(custoProduto !== 0 && valorVenda !== 0) {
    if(custoProduto > 0 && valorVenda > 0) {
        lucro = (valorVenda - custoProduto) * 1000 * 0.8;
    }
}