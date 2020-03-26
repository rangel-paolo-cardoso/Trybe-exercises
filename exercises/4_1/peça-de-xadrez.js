let peca = 'rei';

switch(peca) {
    case 'peão':
        console.log('O peão é peça mais numerosa e menos poderosa no tabuleiro de xadrez. Peões são diferentes no seu movimento. De maneira geral, os peões se movem somente para frente, uma casa por vez. Um exceção é a primeira vez que um peão é movido, quando ele pode se mover duas casas. O peão não pode pular outras peças. Qualquer peça exatamente a frente de um peão bloqueia seu avanço para esta casa. O peão é a única peça que não pode mover-se para trás. O peão é também a única peça que não captura da mesma maneira que se move. Os peões capturam a peça adversária movendo-se diagonalmente uma casa - ele não pode capturar movendo-se para frente.');
        break;
    case 'bispo':
        console.log('O bispo se move em uma linha reta diagonalmente no tabuleiro. Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça. O bispo não pode pular outras peças. O bispo captura no mesmo caminho em que ele se move, parando na casa da peça adversária. Devido à maneira como os bispos se movem, ele sempre permanece em casas da cor em que ele iniciou. Cada jogador começa com dois bispos, um nas casas pretas e outro nas brancas. Eles são frequentemente chamados de bispo da “casa preta” e bispo da “casa branca”. Os bispos podem também ser chamados de acordo com o lado em que eles iniciam o jogo - bispo do rei e bispo da rainha.');
        break;
    case 'torre':
        console.log('A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça. Ele não pode pular outras peças. A torre captura no mesmo caminho em que se move, ocupando a casa onde se encontra a peça adversária. A torre pode parar em qualquer casa do tabuleiro, sendo por isso uma das peças mais poderosas.');
        break;
    case 'cavalo':
        console.log('O cavalo é a peça mais especial no xadrez, possuindo uma flexibilidade que o torna poderoso. O cavalo é a única peça do tabuleiro que pode pular sobre outras peças. O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”. O cavalo sempre termina seu movimento em uma casa de cor oposta à inicial. O cavalo pode pular sobre peças de qualquer cor enquanto vai para sua casa de destino, mas ele não captura nenhuma das peças que pula. O cavalo captura quando termina seu movimento na casa de uma peça adversária. O cavalo não pode terminar seu movimento em uma casa ocupada por uma peça da mesma cor. Uma vez que o movimento do cavalo não é em linha reta, ele pode atacar uma rainha, bispo ou torre sem ser atacado reciprocamente por esta peça.');
        break;
    case 'rainha':
        console.log('A rainha é considerada a peça mais poderosa do tabuleiro. Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente. A rainha se move como a torre e o bispo combinados. A menos que esteja realizando uma captura, o movimento deve terminar em uma casa desocupada e ela não pode pular outras peças. A rainha captura no mesmo caminho em que se move, ocupando a casa da peça adversária.');
        break;
    case 'rei':
        console.log('O rei é a peça mais importante do xadrez. Se o rei for encurralado de modo que sua captura seja inevitável, o jogo termina e o este jogador perde. O rei tem pouca mobilidade, assim ele é considerado também uma das peças mais fracas no jogo. O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente. Ele não pode se mover para uma casa ocupada por uma peça da mesma cor. O rei captura outra peça da mesma maneira que se move, ocupando a casa da peça adversária. Existe um limite adicional ao movimento do rei. O rei não pode se mover para uma casa que o coloque sob ataque de uma peça adversária (chamado em “cheque”). Como resultado desta limitação, dois reis nunca poderão estar ao lado um do outro - uma vez que mover-se para o lado do outro rei o colocaria em cheque. O rei pode também ser forçado a mover-se ou capturar se estiver sob ataque (“cheque”) e a única maneira de interromper o ataque for mover o rei.');
        break;
    default:
        console.log('Peça inválida!');
}