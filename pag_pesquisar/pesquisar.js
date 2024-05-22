const inputTitle = document.getElementById('input_title')
const botao = document.getElementById('button')
const lista = document.getElementById('listaResult')
const body = document.getElementsByTagName('body')
const form = document.getElementById('form_pesquisar')


const listaMusicasString = localStorage.getItem('listaMusicas')
const listaMusicas = JSON.parse(listaMusicasString)

console.log(listaMusicas)


lista.innerHTML = listaMusicas



botao.addEventListener('click',()=>{


    const valor = localStorage.getItem(inputTitle.value)

    if(valor != null){
        //const li = JSON.parse(valor)


    //console.log(li)
        lista.innerHTML = valor
    }else if(valor==null){
        console.log('fala rapaz')
        const p = document.createElement('p')
        p.textContent = "Nenhuma música da playslist encontrada"
        p.classList.add('naoencontrada')
        console.log(p)
        
    }

    
})

form.addEventListener('submit',(event)=>{
    event.preventDefault()
})