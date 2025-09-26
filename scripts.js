const pessoa1 = {
    nome: "Caio Brasil",
    email: "cjpb@gmail.com.br",
    senha: "12345",
    cpf: "123.456.789-10"
}
const pessoa2 = {
    nome: "Suave na Nave",
    email: "snnpb@gmail.com.br",
    senha: "334455",
    cpf: "143.657.232.51"
}
const pessoa3 = {
    nome: "Camile Brasil",
    email: "cvb@gmail.com.br",
    senha: "223344",
    cpf: "157.123.524.23"
}

const pessoas = [pessoa1, pessoa2, pessoa3];

const login = function() {
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    for(let i = 0; i < pessoas.length; i++) {
        if(emailInput === pessoas[i].email && passwordInput === pessoas[i].senha) {
            alert("Usuário logado com sucesso!");
            return;
        }
    }
    alert("Credenciais inválidas.");
}