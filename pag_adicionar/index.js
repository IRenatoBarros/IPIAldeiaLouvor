const form = document.getElementById('form_adicionar')
const inputText = document.getElementById('input_mandar')
const inputTitle = document.getElementById('input_title')
const lista = document.getElementById('lista')
const botao = document.getElementsByTagName('p')[0]
const listaMusicasString = localStorage.getItem('listaMusicas')
const listaMusicas = JSON.parse(listaMusicasString)


botao.addEventListener('click',()=>{
    const iframe = document.createElement('iframe')
    iframe.src = inputText.value

    const h1 = document.createElement('h1')
    h1.textContent = inputTitle.value

    const li = document.createElement('li')
    li.classList.add('element_lista')

    li.appendChild(h1)
    li.appendChild(iframe)

    listaMusicas.push(li.outerHTML)

    const listaMusicasString = JSON.stringify(listaMusicas)
    localStorage.setItem('listaMusicas', listaMusicasString)


    console.log(li)

    const liString = li.outerHTML;

    localStorage.setItem(inputTitle.value,liString)

    lista.appendChild(li)
})

form.addEventListener('submit',(event)=>{
    event.preventDefault()
})