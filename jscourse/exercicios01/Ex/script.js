function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora}Hrs`
    if (hora >= 0 && hora <12){
        
        img.src = ('manha.png')
        document.body.style.background = '#f1c40f'

    } else if (hora >= 12 && hora <18){
        
        img.src = ('tarde.png')
        document.body.style.background = '#f39c12'
    } else {
        
        img.src = ('noite.png')
        document.body.style.background = '#2c3e50'

    }
        
        
        
    

}