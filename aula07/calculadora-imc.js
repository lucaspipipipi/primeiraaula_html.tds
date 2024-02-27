//capturar os evento do formulario
const formulario=document.querySelector('#formulario')
formulario.addEventListener('submit',function(e){//a função aguarda o usuario clicar no butao
    e.preventDefault();
    const inputpeso=e.target.querySelector('#peso')
    const peso = Number(inputpeso.value)
    console.log(inputpeso)
    console.log(peso)
})
formulario.addEventListener('submit',function(e){//a função aguarda o usuario clicar no butao
    e.preventDefault();
    const inputaltura=e.target.querySelector('#altura')
    const altura = Number(inputaltura.value)
    console.log(inputaltura)
    console.log(altura)

    const imc =calcularImc(peso, altura)
    console.log(imc)

})
//função para calcular o IMC e retornar o valor do IMC das duas casas decimais
function calcularImc(peso,altura){
    let imc =(peso / altura ** 2);
    return imc.toFixed(2);
}