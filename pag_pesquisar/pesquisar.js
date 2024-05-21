const inputTitle = document.getElementById('input_title')
const botao = document.getElementById('button')
const lista = document.getElementById('listaResult')
const body = document.getElementsByTagName('body')

botao.addEventListener('click',()=>{

    localStorage.setItem('renatobarros','renatobarros')
    localStorage.setItem('1234','1234')

    const valor = localStorage.getItem(inputTitle.value)

    if(valor != null){
        //const li = JSON.parse(valor)

    console.log(botao)

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

inputTitle.addEventListener('submit',(e)=>{
    e.preventDefaut()
})
