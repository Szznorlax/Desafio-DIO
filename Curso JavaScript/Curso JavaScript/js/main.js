/*var nome = "Maycon da Silva"; 
var idade = 20
var idade2 = 10
var frase = "Japão é o melhor time do mundo"
alert(nome + " tem " + idade + " anos")
alert(idade + idade2)
console.log(nome)
console.log(idade+idade2)
console.log(frase.toLocaleLowerCase())
*/

function clicou(){
    document.getElementById("Agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
    //console.log(document.getElementById("Agradecimento"))
    //alert("Obrigado por clicar")
}

function Redirecionar(){
    window.open("https://github.com/Szznorlax")
    //window.location.href = "https://github.com/Szznorlax"
}

function Trocar(elemento){
    //alert("Trocar texto")
    //document.getElementById("MouseMove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function Voltar(elemento){
    //document.getElementById("MouseMove").innerHTML = "Passe o mouse aqui"   
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Pagina Carregada")
}

function Change(elemento){
    console.log(elemento.value)
}
/*
function soma(n1,n2){
    return n1 + n2;
}

var validar
function validaIdade(idade){
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual sua idade")
validaIdade(idade)
console.log(validar)

alert(soma(5,10))

var d = new Date()
alert(d.getDate())
alert(d.getHours())
alert(d.getMinutes())


var count
for(count=0;count<=5;count++){
    alert(count)
}


var count = 0
while (count <= 5){
    console.log(count)
    alert(count)
    count++
}


var idade = prompt("Qual sua idade?")
if(idade >= 18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
}


var frutas = [{nome:"maça", cor:"Vermelho"},{nome:"Uva", cor:"Roxo"}]
console.log(frutas)
alert(frutas[1].nome)



var fruta = {nome:"maça", cor:"Vermelho"}
console.log(fruta.nome)
alert(fruta.cor)


var lista = ["maça","pera","laranja"]
lista.push("Uva")
lista.pop()
console.log(lista)
console.log(lista.toString())
console.log(lista.join(" "))
*/