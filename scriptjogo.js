/*

- Ideia inicial: teremos um contador que é incrementado em +1 a cada jogada. Ele é responsavel por saber quem
jogou. A cada clique o quadrado recebe o conteudo x ou o. Para saber se ganhou deve-se realizar a soma das
linhas. Pode ser feito com true ou false, dependendo de quem jogou. Ou recebendo, cada quadrado, o valor 0 ou 1.
Se a soma der 3, x ganha, se nao, o ganha.

- Cada clique recebe o valor de 0 ou 1. Ao final será realizado a soma. Se for estritamente igual a 0 um
ganha, se não, o outro ganha

- Pode ser criado duas funcoes para verificar cada diagonal e outras para verificar as laterais


*/

let cont = 0
let result = ''

function verifica() {

    let qd =
        [

            [[document.getElementById('sqr1').value], [document.getElementById('sqr2').value], [document.getElementById('sqr3').value]],
            [[document.getElementById('sqr4').value], [document.getElementById('sqr5').value], [document.getElementById('sqr6').value]],
            [[document.getElementById('sqr7').value], [document.getElementById('sqr8').value], [document.getElementById('sqr9').value]]

        ]

    // Verificando X -> Primeiro na horizontal depois na vertical
    if (
        (qd[0][0] + qd[0][1] + qd[0][2] === '000') || (qd[1][0] + qd[1][1] + qd[1][2] === '000') || (qd[2][0] + qd[2][1] + qd[2][2] === '000')
    )
        alert('Macaco Sorridente ganhou!!!')

    else if (
        (qd[0][0] + qd[1][0] + qd[2][0] === '000') || (qd[0][1] + qd[1][1] + qd[2][1] === '000') || (qd[0][2] + qd[1][2] + qd[2][2] === '000')
    )
        alert('Macaco Sorridente ganhou!!!')

    // Verificando O -> Primeiro na horizontal depois na vertical
    else if (
        (qd[0][0] + qd[0][1] + qd[0][2] === '111') || (qd[1][0] + qd[1][1] + qd[1][2] === '111') || (qd[2][0] + qd[2][1] + qd[2][2] === '111')
    )
        alert('Macaco São Paulino ganhou!!!')

    else if (
        (qd[0][0] + qd[1][0] + qd[2][0] === '111') || (qd[0][1] + qd[1][1] + qd[2][1] === '111') || (qd[0][2] + qd[1][2] + qd[2][2] === '111')
    )
        alert('Macaco São Paulino ganhou!!!')


    // Verificando se alguma diagonal é X
    else if (
        (qd[0][0] + qd[1][1] + qd[2][2] === '000') || (qd[0][2] + qd[1][1] + qd[2][0] === '000')
    )
        alert('Macaco Sorridente ganhou!!!')


    // Verificando se alguma diagonal é O
    else if (
        (qd[0][0] + qd[1][1] + qd[2][2] === '111') || (qd[0][2] + qd[1][1] + qd[2][0] === '111')
    )
        alert('Macaco São Paulino ganhou!!!')

}





function teste() {

    // Cada vez que clico em um elemento essa funcao é ativada. Ela verifica o elemento que foi clicado e 
    // incrementa o contador. Se o elemento for da classe square ela muda o seu conteudo. A cada clique ela 
    // chama tambem o verificador.

    window.onclick = e => {
        console.log(e.target);  // Para mostrar o elemento
        console.log(e.target.className) // Para mostrar a classe do elemento

        if (cont % 2 == 0 && e.target.className == 'square') {
            e.target.style.backgroundImage = "url('https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/09/26/150926165742__85730600_monkey2.jpg')" // 0
            e.target.value = 0
            cont++
            verifica()
        }

        else if (cont % 2 == 1 && e.target.className == 'square') {
            e.target.style.backgroundImage = "url('https://pbs.twimg.com/profile_images/1320605323690991616/m78NQhFw.jpg')" // 1
            e.target.value = 1
            cont++
            verifica()
        }

    }

}