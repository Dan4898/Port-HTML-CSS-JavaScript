function verificar(){
    
    var data = new Date() //Crio um new Date para conseguir o ano atual
    var ano = data.getFullYear() //Extraio o ano atual da var data

    
    var fano = document.getElementById('txtano') //Importo os valores do ano de nascimento
    var res = document.querySelector('.res-txt')//Importo o texto acima da imagem
    var img = document.querySelector('.imagem')//Importo imagem
    
    if (fano.value.length === 0 || Number(fano.value) > ano || Number(fano.value) < 1900){
        alert('[ERRO!] Verifique os dados e tente novamente.')
        res.style.color = 'red'
        img.style.display = 'none'
        return;
    }

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var srcImg = ''

    if(fsex[0].checked){ //Verifica se o sexo é masculino
        genero = 'Homem'
        if (idade > 0 && idade <= 10 ){ //Verifica a idade e retorna a imagem de acordo com a idade
            srcImg = './imagens/garoto.jpg' //Criança
        } else if (idade < 21){
            srcImg = './imagens/rapaz.jpg' //Jovem
        } else if (idade < 50){
            srcImg = './imagens/homem.jpg' //Adulto
        } else {
            srcImg = './imagens/idoso.jpg' //Idoso
        }
    } else if(fsex[1].checked){
        genero = 'Mulher'
        if (idade > 0 && idade <= 10 ){ //Verifica a idade e retorna a imagem de acordo com a idade
            srcImg = './imagens/garota.jpg' //Criança
        } else if (idade < 21){
            srcImg = './imagens/moça.jpg' //Jovem
        } else if (idade < 50){
            srcImg = './imagens/mulher.jpg' //Adulto
        } else {
            srcImg = './imagens/idosa.jpg' //Idoso
        }
    }

        res.style.color = '#333'
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
        img.src = srcImg;
        img.style.display = 'block'
    }


