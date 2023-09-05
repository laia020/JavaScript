/*
function calcular(raio){
    return` Perímetro: ${2 * Math.PI * raio} Area: ${Math.PI * raio * raio}`
}
console.log(calcular(10));
document.write(calcular(20));
// 
function exemplo(num){
    return num * num
}
console.log(exemplo(10));
// arrow function
const exemplo1=(num)=>{
    return num * num
}
console.log(exemplo1(20))
// arrow function simolificada
const exemplo2 = (num)=> {num * num}
console.log(exemplo2(20))
*/
function mudar() {

    let novo = document.getElementById("idNome")

    document.getElementById("titulo").required = true;
    document.getElementById("titulo").innerHTML=novo.value ;
}
function inserir(){
    let numero = document.getElementById("posição").value -1;
    let novo = document.getElementById("novo").value;

    document.getElementsByClassName("colocado")[numero].innerHTML = novo
}