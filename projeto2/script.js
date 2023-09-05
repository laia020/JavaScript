// DECLARANDO A VARIAVEL MSG 
let msg =document.getElementById('msg')

// CRIANDO UM OBJETO COM ARRAY 

const usuarios=[
    {nome:"HUGUINHO", idade:18},
    {nome:"LUIZINHO",idade:19},
    {nome:"ZEZINHO", idade:20},
];

// CRIANDO UMA INSTANCIA 

let users= usuarios.length;

for(let i=0; i<users;i++){
    msg.innerHTML+=`<P>${usuarios[i].nome} ${usuarios[i].idade}</P>`
}

// CRIANDO SLIDE SHOW 

// CRIANDO UM ARRAY DE IMAGENS 

var imagens=[
    'img/img1.gif',
    'img/img2.gif',
    'img/img3.gif',
];

// DECLARANDO AS VARIAVEIS 

let Index =0; //indica a posicao 
let time =2000; //indica o tempo das iamgens

// CRIANDO UMA FUNCAO 
function slideShow(){
    document.getElementById('image').src=imagens[Index]
    Index++; //incrementa
    if(Index ==imagens.length){Index=0}
    setTimeout("slideShow()",time);
}

slideShow();
