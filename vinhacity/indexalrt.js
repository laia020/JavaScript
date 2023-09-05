alert("Seja bem Vindo") 

// criando  a funao validar 
function validar(){
    // declarando 
    let nome =document.getElementById("nome").value
    let tel =document.getElementById("tel").value
    let email =document.getElementById("email").value
    
    // condicional if-else 
    if( nome =="" && tel =="" && email ==""){
        alert("Preencha todos os campos")
    }else{
        window.open('menu.html')
    }
}

// criando uma funcao e usando template strings 

function calc(){
    // declarando a variaveis 
    let num1 = Number(prompt("Digite o primeiro número"))
    let num2 = Number(prompt("Digite o segundo número"))
    let op = Number(prompt(`Escolha uma opção: ${num1} e ${num2}. \n[1]-Somar \n[2]-Subtrair \n[3]Multiplicar \n[4]-Dividir`))

    let msg = document.getElementById('msg')
    msg.innerHTML += `<h2>Resultado</h2>`

    switch(op){
        case 1:
            msg.innerHTML += `<p> ${num1} + ${num2} = <strong>${num1+num2}</strong>`
            break;
        case 2:
            msg.innerHTML += `<p> ${num1} - ${num2} = <strong>${num1-num2}</strong>`
            break;
        case 3:
            msg.innerHTML += `<p> ${num1} * ${num2} = <strong>${num1*num2}</strong>`
            break;
        case 4:
            msg.innerHTML += `<p> ${num1} / ${num2} = <strong>${num1/num2}</strong>`
            break;
        default:
            msg.innerHTML += `<p>Opção Inválida</p>`
            break;
    }
}