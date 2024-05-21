const inputUser = document.getElementsByTagName('input')[0]
const inputSenha = document.getElementsByTagName('input')[1]
const botton = document.getElementsByTagName('p')[0]


botton.addEventListener('click',(e)=>{
    const user = localStorage.getItem(inputUser.value)
    const senha = localStorage.getItem(inputSenha.value)

    if(user!=null && senha!=null){
        window.location.href = "/principal/index.html"
    }else{
        window.alert("Login incorreto ):")
    }
})

