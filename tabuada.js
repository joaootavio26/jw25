const frm = document.querySelector("form")
const resp = document.querySelector("pre")

 //ouvint
 frm.addEventListener("sumit", (e) =>{
    e.preventDefault()

    const numero = Number(frm.inNumero.valune)]
    let resposta = "" //variavel do tipo string, para contactar a resposta
    //cria um laço de repetição 
    fir(let i=1; i <= 10; i++){
        resposta = resposta + numero +" x " +i+"="+ (numero*i) +"/n"
    }
    resp.innerText = resposta
    
 })