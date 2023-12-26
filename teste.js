const personagens = document.querySelectorAll('.personagem');
const fotoSecundaria = document.querySelector('.foto-secundaria')
const titulo = document.querySelector('.titulo')
const tanjiro = document.querySelector('.Tanjiro')


for(let contador = 0; contador<personagens.length ; contador++){
    const lista = personagens[contador]
    const segundaClasse = lista.classList[1]
    
    lista.addEventListener('click', () => {
        fotoSecundaria.setAttribute('src', `/imgs/${segundaClasse}-card.jpeg`)
        document.querySelectorAll('.borda')
        .forEach(elemento => {
            elemento.classList.remove('borda')
            
            
        });
        lista.classList.add('borda')
        
        switch (lista) {
            case lista:
                titulo.innerHTML = `${segundaClasse}`
                default:
                break;
        }
    })

  
    
    
}

