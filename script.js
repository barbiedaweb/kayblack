const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultados = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")

const perguntas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: ["Ter a oportunidade de ganhar uma grande quantidade de dinheiro, mas perder o contato com todos seus amigos, Realizar seu maior sonho de morar em outro país, mas ficar 7 anos sem nenhum contato com sua família e amigos"]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: ["Ajudar a combater a poluição do oceano com uma nova tecnologia, mas ter uma extinção de animais marinhos, Acabar com o uso de combustíveis fósseis, mas ver metade da população perdendo o emprego"]
    },
    {
        enunciado: "No âmbito tecnologico, você prefere:",
        alternativas: ["Ter uma tecnologia que diz qual a doença do paciente, mas ter metade da população perdendo seu emprego na saúde, Ganhar todo ano o celular do momento, mas ter todas suas informações vazadas"]
    }

]

let atual = 0;
let perguntaAtual;

function mostraPerguntas (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;

}

mostraPerguntas();