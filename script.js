const perguntas = [
{
enunciado: " O Brasil é o maior país da América do Sul?",
alternativas: [
"sim ele é o maior",
"Não ele é o menor"
]
},
{
enunciado: "A Amazônia é uma floresta tropical localizada em grande parte no Brasil?",
alternativas: [
"sim, é o mnaior do continente.",
"não, é a menor e mais desgraçada do continente"
]
},
{
enunciado: "O Carnaval do Rio de Janeiro é um dos maiores eventos culturais do Brasil",
alternativas: [
"Não é o maior, mas só uma cultura",
"Sim é o maior do Rio de janeiro!",

]
},
{
enunciado: "O Brasil foi colonizado por Portugal?",
alternativas: [
"Pelos malditos Portugueses",
"Não, foi pelos alienigenas!."
]

},
{
enunciado: "O idioma oficial do Brasil é o espanhol?",
alternativas: [
"Não, é o alemão .",
"não é o portugues brasileiro"
]
}
];
let atual = 0;
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');
function mostraPergunta() {
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
alternativasContainer.innerHTML = '';
perguntaAtual.alternativas.forEach((alternativa, index) => {
const button = document.createElement('button');
button.textContent = alternativa;
button.addEventListener('click', () => {
atual++;
if (atual < perguntas.length) {
mostraPergunta();
} else {
caixaPerguntas.textContent = 'Você completou o questionário!';
alternativasContainer.innerHTML = '';
}
});
alternativasContainer.appendChild(button);
});
}
mostraPergunta();