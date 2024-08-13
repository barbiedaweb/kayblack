const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultados = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")

const perguntas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: [
            {
                texto: "Ter a oportunidade de ganhar uma grande quantidade de dinheiro, mas perder o contato com todos seus amigos.",
                afirmacao: "Afirmação 1",
            },
            {
                texto: "Realizar seu maior sonho de morar em outro país, mas ficar 7 anos sem nenhum contato com sua família e amigos.",
                afirmacao: "Afirmação 2",
            }]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Ajudar a combater a poluição do oceano com uma nova tecnologia, mas ter uma extinção de animais marinhos",
                afirmacao: "Afirmação 3",
            },
            {
                texto: "Acabar com o uso d,e combustíveis fósseis, mas ver metade da população perdendo o emprego.",
                afirmacao: "Afirmação 4"
            }]
        },
    {
        enunciado: "No âmbito tecnologico, você prefere:",
    
        alternativas: [
            {
               texto:"Ter uma tecnologia que diz qual a doença do paciente, mas ter metade da população perdendo seu emprego na saúde.",
               afirmacao: "Afirmação 5",
            },
            {
                texto: "Ganhar todo ano o celular do momento, mas ter todas suas informações vazadas.",
                afirmacao: "Afirmação 6"
            }]
    }

]

let atual = 0;
let perguntaAtual;

function mostraPerguntas() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();

}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}


mostraPerguntas();
