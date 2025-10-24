function soma() {
    var op1 = document.getElementById("op1").value;
    var op2 = document.getElementById("op2").value;
    var op1Number = parseInt(op1);
    var op2Number = parseInt(op2);
    var soma = op1Number + op2Number;
    console.log(soma);

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "O resultado da soma é: " + soma;
    resultado.style.display = "block";
    resultado.style.border = "1px solid black";
    resultado.style.padding = "10px";
    resultado.style.marginTop = "10px";
    resultado.style.backgroundColor = "#f9f9f9";
    resultado.style.listStyle = "none";
    resultado.style.fontWeight = "bold";
    resultado.style.color = "#10ac3fff";
    resultado.style.fontSize = "20px";
}

function sub() {
    var op1 = document.getElementById("op1").value;
    var op2 = document.getElementById("op2").value;
    var op1Number = parseInt(op1);
    var op2Number = parseInt(op2);
    var sub = op1Number - op2Number;
    console.log(sub);

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "O resultado da subtração é: " + sub;
    resultado.style.display = "block";
    resultado.style.border = "1px solid black";
    resultado.style.padding = "10px";
    resultado.style.marginTop = "10px";
    resultado.style.backgroundColor = "#f9f9f9";
    resultado.style.fontWeight = "bold";
    resultado.style.color = "#d84545";
    resultado.style.fontSize = "20px";
}

function mult() {
    var op1 = document.getElementById("op1").value;
    var op2 = document.getElementById("op2").value;
    var op1Number = parseInt(op1);
    var op2Number = parseInt(op2);
    var mult = op1Number * op2Number;
    console.log(mult);

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "O resultado da multiplicação é: " + mult;
    resultado.style.display = "block";
    resultado.style.border = "1px solid black";
    resultado.style.padding = "10px";
    resultado.style.marginTop = "10px";
    resultado.style.backgroundColor = "#f9f9f9";
    resultado.style.fontWeight = "bold";
    resultado.style.color = "#10ac3fff";
    resultado.style.fontSize = "20px";
}
function divi() {
    var op1 = document.getElementById("op1").value;
    var op2 = document.getElementById("op2").value;
    var op1Number = parseInt(op1);
    var op2Number = parseInt(op2);
    var divi = op1Number / op2Number;
    console.log(divi);

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "O resultado da divisão é: " + divi;
    resultado.style.display = "block";
    resultado.style.border = "1px solid black";
    resultado.style.padding = "10px";
    resultado.style.marginTop = "10px";
    resultado.style.backgroundColor = "#f9f9f9";
    resultado.style.fontWeight = "bold";
    resultado.style.color = "#d84545";
    resultado.style.fontSize = "20px";
}

function abrirWhatsapp() {
  let nome = document.getElementById('nome').value;
  let sobrenome = document.getElementById("sobrenome").value;
  let data = document.getElementById("data").value;
  let email = document.getElementById('email').value;
  let mensagem = document.getElementById('mensagem').value;

  let numero = "553299702829"; // Substitua pelo seu número com código do país e DDD

  let texto = `Nome: ${nome}\nSobrenome: ${sobrenome}\nData: ${data}\nEmail: ${email}\nMensagem: ${mensagem}`;
  let link = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(link);
}