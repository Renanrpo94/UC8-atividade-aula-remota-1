console.log ("Bem vindo ao software de cadastro de peças");

let peso = 120;  // peso da peça

if (peso > 100) {
    console.log("Peso dentro dos parâmetros, prosseguir com cadastro")
} else {
    console.log("Cadastro não pode ser efetuado, a peça não tem o peso minimo exigido")
}

let listaPecas = ["Arruela","Parafuso","Porca","Rolimã","Sextavado","Bloco","Mola","bsp08","ab"];

let numeroPecas = listaPecas.length;

if (numeroPecas <10) {
    console.log("Espaço disponivel, prossiga com o cadastro")
} else {
    console.log("Sem espaço disponvivel na lista, capacidade máxima já foi atingida")
}

let nomePeca = listaPecas [1]  // peça a ser selecionada dentro das opções da linha 11

if (nomePeca.length >3) {
    console.log("Nome válido, cadastro efetuado")
} else {
    console.log("Nome inválido, o nome deve ter mais que 3 caracteres")
}