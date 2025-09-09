function processaForm ( ) {
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var cpf = document.getElementById("cpf"); 
    var email = document.getElementById("email");
    var celular = document.getElementById("celular");
    var data_nascimento = document.getElementById("data_nascimento");
    var genero = document.getElementById("genero");
    var senha = document.getElementById("senha");
    var repita_senha = document.getElementById("repita_senha");
    console.log("O nome digitado foi: " + nome.value);
    console.log("O sobrenome digitado foi: " + sobrenome.value);
    console.log("O CPF digitado foi: " + cpf.value);
    console.log("O email digitado foi: " + email.value);
    console.log("O celular digitado foi: " + celular.value);
    console.log("A data de nascimento digitada foi: " + data_nascimento.value);
    console.log("O gênero digitado foi: " + genero.value);
    console.log("A senha digitada foi: " + senha.value);
    console.log("A repetição da senha digitada foi: " + repita_senha.value ); 
    
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <div>
            <div onclick= "fechaDivResultado()" id="fechar">X</div>
            <div>Formulário enviado com sucesso!</div>
            <div>Nome: ${nome.value}</div>
            <div>Sobrenome: ${sobrenome.value}</div>
            <div>CPF: ${cpf.value}</div>
            <div>Email: ${email.value}</div>
            <div>Celular: ${celular.value}</div>
            <div>Data de Nascimento: ${data_nascimento.value}</div>
            <div>Gênero: ${genero.value}</div>
            <div>Senha: ${senha.value}</div>
            <div>Repetição da Senha: ${repita_senha.value}</div>
        </div>
    `;
resultado.style.display = "block";
resultado.style.border = "1px solid black";
resultado.style.padding = "10px";
resultado.style.marginTop = "10px";
resultado.style.backgroundColor = "#f9f9f9";
resultado.style.listStyle = "none";

}

function fechaDivResultado() {
    var resultado = document.getElementById("resultado");
    resultado.style.display = "none";
    var onclick = document.getElementById("fechar");
    onclick.style.cursor = "pointer";
}