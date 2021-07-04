//Recebe os valores do HTML
document.querySelector('.generate-qr-code').addEventListener('click', function () {
    let url = document.querySelector('.qr-url').value
    let size = document.querySelector('.qr-size').value

    //Varifica se tentou gerar sem inserir nada
    if (url == '') {
        window.alert('Preencha o campo abaixo para o gerar um QRCode!')
    } else {

        //div limpa antes de gerar o código
        document.querySelector('#qrcode').innerHTML = ''

        //Gera QRCode
        let qrcode = new QRCode(document.querySelector('#qrcode'), {
            text: `${url}`,
            width: `${size}`,
            height: `${size}`,
            colorDark: `black`,
            colorLight: `white`,
            correctLevel: QRCode.CorrectLevel.H
        })
    }
})