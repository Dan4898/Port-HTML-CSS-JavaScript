function horaDoDia(){
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    if(min < 10) min = `0${min}`
    
    var container = document.querySelector('div.container')
    var greeting = document.querySelector('p.greeting2')
    var msg = document.querySelector('p.msg2')
    var img = document.querySelector('img.img-top')

    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`

    if (hora >= 0 && hora < 12){
        greeting.innerHTML = 'Bom dia!'
        document.body.style.background = '#87CEEB'
        img.src = './imagens/manhã.jpg'
        container.style.backgroundColor = 'white'
    } else if (hora >=12 && hora < 18) {
        greeting.innerHTML = 'Boa tarde!'
        document.body.style.background = '#FDB147'
        img.src = './imagens/tarde.jpg'
        container.style.backgroundColor = '#fff8e7'
    } else {
        greeting.innerHTML = 'Boa noite!'
        document.body.style.background = '#0B1D51'
        img.src = './imagens/noite.jpg'
        container.style.backgroundColor = '#1e2a3a'
        greeting.style.color = 'white'
        msg.style.color = 'white'
    }


}

window.onload = horaDoDia